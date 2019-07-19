import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { box } from 'tweetnacl';
import { encodeBase64 } from 'tweetnacl-util';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';

declare var ClipboardJS: any;

@Component({
  selector: 'app-q-created',
  templateUrl: './q-created.component.html',
  styleUrls: ['./q-created.component.css']
})
export class QCreatedComponent implements OnInit {
  questionnaireAddress: string = this.getQuestionnaireAddress();
  resultAddress: string = this.getResultsAddress();
  private content: string = "Questionnaire URL:\n"
    + this.questionnaireAddress + "\n"
    + "Results URL:\n"
    + this.resultAddress + "\n";

  constructor(
    private g: GlobalService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    new ClipboardJS('.btnCopy');
  }

  download() {
    let blob = new Blob([this.content], { type: "text/plain" });
    FileSaver.saveAs(blob, `${this.route.snapshot.params['qid']}.txt`);
  }

  private getQuestionnaireAddress(): string {
    let array = new Uint8Array(box.secretKeyLength + box.publicKeyLength);
    array.set(this.g.thatKeyPair.secretKey, 0);
    array.set(this.g.thisKeyPair.publicKey, box.secretKeyLength);
    let frag = encodeBase64(array);
    let base = `${location.origin}/${this.route.snapshot.params['qid']}`;
    return `${base}#${frag}`;
  }

  private getResultsAddress(): string {
    let array = new Uint8Array(box.secretKeyLength + box.secretKeyLength);
    array.set(this.g.thisKeyPair.secretKey, 0);
    array.set(this.g.thatKeyPair.secretKey, box.secretKeyLength);
    let frag = encodeBase64(array);
    let base = `${location.origin}/r/${this.route.snapshot.params['qid']}`;
    return `${base}#${frag}`;
  }
}