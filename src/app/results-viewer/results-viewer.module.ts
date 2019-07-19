import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsViewerRoutingModule } from './results-viewer-routing.module';
import { RViewerComponent } from './r-viewer/r-viewer.component';

@NgModule({
  declarations: [RViewerComponent],
  imports: [
    CommonModule,
    ResultsViewerRoutingModule
  ]
})
export class ResultsViewerModule { }
