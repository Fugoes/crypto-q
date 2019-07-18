import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { QuestionerRoutingModule } from './questioner-routing.module';
import { QCreatedComponent } from './q-created/q-created.component';
import { QCreateComponent } from './q-create/q-create.component';

@NgModule({
  declarations: [QCreatedComponent, QCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    QuestionerRoutingModule
  ]
})
export class QuestionerModule { }
