import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACreateComponent } from './a-create/a-create.component';

const routes: Routes = [
  { path: ':qid', component: ACreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestioneeRoutingModule { }
