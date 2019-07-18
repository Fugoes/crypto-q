import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QCreateComponent } from './q-create/q-create.component';
import { QCreatedComponent } from './q-created/q-created.component';

const routes: Routes = [
  { path: 'create', component: QCreateComponent },
  { path: ':qid/created', component: QCreatedComponent },
  { path: '', redirectTo: '/create', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionerRoutingModule { }
