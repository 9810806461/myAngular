import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';
import { FormComponent } from './form.component';
import { FormComponentRoutingModule } from './form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormComponentRoutingModule
  ],
  declarations: [FormComponent]
})
export class FormComponentModule {}
