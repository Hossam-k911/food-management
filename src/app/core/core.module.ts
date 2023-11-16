import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { RegisterComponent } from './Components/register/register.component';


@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent, RegisterComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
