import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RViewerComponent } from './r-viewer/r-viewer.component';

const routes: Routes = [
  { path: ':qid', component: RViewerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsViewerRoutingModule { }
