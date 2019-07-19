import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-r-viewer',
  templateUrl: './r-viewer.component.html',
  styleUrls: ['./r-viewer.component.css']
})
export class RViewerComponent implements OnInit {
  results$: Observable<string[]>;

  constructor(
    private g: GlobalService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const qid = Number(this.route.snapshot.params['qid']);
    const frag = this.route.snapshot.fragment;
    this.g.setupKeys(frag);
    this.results$ = this.g.getResults(qid);
  }

  refresh() {
    const qid = Number(this.route.snapshot.params['qid']);
    this.results$ = this.g.getResults(qid);
  }
}