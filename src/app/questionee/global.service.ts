import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { box, BoxKeyPair, randomBytes } from 'tweetnacl';
import { decodeBase64, encodeUTF8 } from 'tweetnacl-util';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

class QuestionnaireData {
  content: string;
  nonce: string;
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

  private decrypt(msg: string, nonce: string): string {
    let msgRaw = decodeBase64(msg);
    let nonceRaw = decodeBase64(nonce);
    let r = box.open(msgRaw, nonceRaw, this.publicKey, this.keyPair.secretKey);
    if (!r) {
      throw new Error("decryption failed");
    }
    return encodeUTF8(r);
  }
}
