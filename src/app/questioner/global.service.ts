import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { box, BoxKeyPair, randomBytes } from 'tweetnacl';
import { decodeUTF8, encodeBase64 } from 'tweetnacl-util';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

class QidRes {
  qid: Number
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  thisKeyPair: BoxKeyPair;
  thatKeyPair: BoxKeyPair;

  constructor(private http: HttpClient) { }

  genKeyPairs() {
    this.thisKeyPair = box.keyPair();
    this.thatKeyPair = box.keyPair();
  }

  sendQContent(content: string): Observable<Number> {
    let r = this.encrypt(content);
    const data = {
      content: r[0],
      nonce: r[1],
    };
    return this.http.post<QidRes>(`${environment.apiURL}/q`, data)
      .pipe(map(res => res.qid));
  }

  private encrypt(content: string): [string, string] {
    const contentRaw = decodeUTF8(content);
    const nonce = randomBytes(box.nonceLength);
    const contentEncrypted = box(contentRaw, nonce,
      this.thatKeyPair.publicKey, this.thisKeyPair.secretKey);
    return [encodeBase64(contentEncrypted), encodeBase64(nonce)];
  }
}