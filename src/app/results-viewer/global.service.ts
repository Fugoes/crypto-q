import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { box, BoxKeyPair } from 'tweetnacl';
import { decodeBase64, encodeUTF8 } from 'tweetnacl-util';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

class ResultRes {
  content: string;
  nonce: string;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  thisKeyPair: BoxKeyPair;
  thatKeyPair: BoxKeyPair;

  constructor(private http: HttpClient) {
  }

  setupKeys(frag: string) {
    const array = decodeBase64(frag);
    const thisKeyArray = array.slice(0, box.secretKeyLength);
    const thatKeyArray = array.slice(box.secretKeyLength, array.length);
    this.thisKeyPair = box.keyPair.fromSecretKey(thisKeyArray);
    this.thatKeyPair = box.keyPair.fromSecretKey(thatKeyArray);
  }

  getResults(qid: Number): Observable<string[]> {
    return this.http.get<ResultRes[]>(`${environment.apiURL}/q/${qid}/a`)
      .pipe(map(rs => rs.map(res => this.decryptResult(res))));
  }

  private decryptResult(result: ResultRes): string {
    const content = decodeBase64(result.content);
    const nonce = decodeBase64(result.nonce);
    const r = box.open(content, nonce,
      this.thatKeyPair.publicKey, this.thisKeyPair.secretKey);
    if (!r) {
      return null;
    } else {
      return encodeUTF8(r);
    }
  }
}
