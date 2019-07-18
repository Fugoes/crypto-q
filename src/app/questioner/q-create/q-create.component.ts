import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q-create',
  templateUrl: './q-create.component.html',
  styleUrls: ['./q-create.component.css']
})
export class QCreateComponent implements OnInit {
  @ViewChild('textarea', { static: true }) private textarea: ElementRef;

  content: string = '';

  constructor(
    private g: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.textarea.nativeElement.focus();
  }

  async onClick() {
    this.g.genKeyPairs();
    let qid = await this.g.sendQContent(this.content).toPromise();
    this.router.navigateByUrl(`/q/${qid}/created`);
  }
}
