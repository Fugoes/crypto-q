import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a-create',
  templateUrl: './a-create.component.html',
  styleUrls: ['./a-create.component.css']
})
export class ACreateComponent implements OnInit {
  content: string = null;

  constructor(
    private g: GlobalService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.g.setupKeys(this.route.snapshot.fragment);
    const qid = Number(this.route.snapshot.params['qid']);
    this.g.getQuestionnaireContent(qid).subscribe(
      res => this.content = res
    );
  }

}
