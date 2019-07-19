import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule, MatButtonModule, MatListModule
} from '@angular/material';

import { ResultsViewerRoutingModule } from './results-viewer-routing.module';
import { RViewerComponent } from './r-viewer/r-viewer.component';

@NgModule({
  declarations: [RViewerComponent],
  imports: [
    CommonModule,
    ResultsViewerRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ]
})
export class ResultsViewerModule { }
