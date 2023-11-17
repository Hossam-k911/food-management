import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { RegisterComponent } from './Components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { ResetPasswordDialogComponent } from './Components/reset-password/reset-password-dialog/reset-password-dialog.component';
import { LoaderComponent } from './Interceptors/Loader/Components/loader/loader.component';

@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent, RegisterComponent, ResetPasswordDialogComponent, LoaderComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
})
export class CoreModule {}
