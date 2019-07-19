import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { box, BoxKeyPair, randomBytes } from 'tweetnacl';
import {
  decodeBase64, encodeBase64, encodeUTF8, decodeUTF8
} from 'tweetnacl-util';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

class QuestionnaireData {
  content: string;
  nonce: string;
}

class AidRes {
  aid: Number;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  publicKey: Uint8Array;
  keyPair: BoxKeyPair;

  constructor(
    private http: HttpClient
  ) {
  }

  setupKeys(frag: string) {
    let array = decodeBase64(frag);
    let secretKey = array.slice(0, box.secretKeyLength);
    this.keyPair = box.keyPair.fromSecretKey(secretKey);
    this.publicKey = array.slice(box.secretKeyLength, array.length);
  }

  getQuestionnaireContent(qid: Number): Observable<string> {
    return this.http.get<QuestionnaireData>(`${environment.apiURL}/q/${qid}`)
      .pipe(map(res => this.decrypt(res.content, res.nonce)));
  }

  sendAContent(qid: Number, content: string): Observable<Number> {
    let r = this.encrypt(content);
    const data = {
      content: r[0],
      nonce: r[1],
    };
    return this.http.post<AidRes>(`${environment.apiURL}/q/${qid}/a`, data)
      .pipe(map(res => res.aid));
  }

  private decrypt(msg: string, nonce: string): string {
    let msgRaw = decodeBase64(msg);
    let nonceRaw = decodeBase64(nonce);
    let r = box.open(msgRaw, nonceRaw, this.publicKey, this.keyPair.secretKey);
    if (!r) {
      throw new Error("decryption failed");
    }
    return encodeUTF8(r);
  }

  private encrypt(content: string): [string, string] {
    const contentRaw = decodeUTF8(content);
    const nonce = randomBytes(box.nonceLength);
    const contentEncrypted = box(contentRaw, nonce,
      this.publicKey, this.keyPair.secretKey);
    return [encodeBase64(contentEncrypted), encodeBase64(nonce)];
  }
}
