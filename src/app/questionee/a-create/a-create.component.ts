import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GlobalService } from '../global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a-create',
  templateUrl: './a-create.component.html',
  styleUrls: ['./a-create.component.css']
})
export class ACreateComponent implements OnInit {
  @ViewChild('textarea', { static: true }) private textarea: ElementRef;
  content: string = '';
  input: string = '';
  disabled: boolean = true;
  placeholder: string = 'Loading questionnaire content...';

  constructor(
    private g: GlobalService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.g.setupKeys(this.route.snapshot.fragment);
    const qid = Number(this.route.snapshot.params['qid']);
    this.g.getQuestionnaireContent(qid).subscribe(
      res => {
        this.content = res;
        this.placeholder = 'Click the \'Submit\' button above'
          + ' after finishing the questionnaire.';
        this.disabled = false;
      }
    );
  }

  submit() {
    console.log("submit");
  }
}
