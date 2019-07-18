import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { box, BoxKeyPair } from 'tweetnacl';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

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
    const data = {
      content: content
    };
    return this.http.post<QidRes>(`${environment.apiURL}/q`, data)
      .pipe(map(res => res.qid));
  }
}
