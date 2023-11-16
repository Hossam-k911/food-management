import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { RegisterComponent } from './Components/register/register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent, RegisterComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
})
export class CoreModule {}
