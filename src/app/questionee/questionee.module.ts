import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestioneeRoutingModule } from './questionee-routing.module';
import { ACreateComponent } from './a-create/a-create.component';

@NgModule({
  declarations: [ACreateComponent],
  imports: [
    CommonModule,
    QuestioneeRoutingModule
  ]
})
export class QuestioneeModule { }
