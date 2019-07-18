import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-q-create',
  templateUrl: './q-create.component.html',
  styleUrls: ['./q-create.component.css']
})
export class QCreateComponent implements OnInit {
  @ViewChild('textarea', { static: true }) private textarea: ElementRef;

  content: string = '';

  constructor(private g: GlobalService) { }

  ngOnInit() { }

  async onClick() {
    let qid = await this.g.sendQContent(this.content).toPromise();
    console.log(qid);
  }
}
