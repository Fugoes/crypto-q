import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/q/create', pathMatch: 'full' },
  {
    path: 'q',
    loadChildren: () => import('./questioner/questioner.module')
      .then(m => m.QuestionerModule)
  },
  {
    path: 'r',
    loadChildren: () => import('./results-viewer/results-viewer.module')
      .then(m => m.ResultsViewerModule)
  },
  {
    path: '',
    loadChildren: () => import('./questionee/questionee.module')
      .then(m => m.QuestioneeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
