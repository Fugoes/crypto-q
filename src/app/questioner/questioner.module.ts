import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';

import { QuestionerRoutingModule } from './questioner-routing.module';
import { QCreatedComponent } from './q-created/q-created.component';
import { QCreateComponent } from './q-create/q-create.component';

@NgModule({
  declarations: [QCreatedComponent, QCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    QuestionerRoutingModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class QuestionerModule { }
