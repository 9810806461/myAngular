import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';
import { LoginPageComponent } from './login-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import {LoginPageComponentRoutingModule} from './login-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageComponentRoutingModule

  ],
  declarations: [LoginPageComponent]
})
export class LoginPageComponentModule {}
