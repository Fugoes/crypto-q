import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';

import { QuestioneeRoutingModule } from './questionee-routing.module';
import { ACreateComponent } from './a-create/a-create.component';

@NgModule({
  declarations: [ACreateComponent],
  imports: [
    CommonModule,
    QuestioneeRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class QuestioneeModule { }
