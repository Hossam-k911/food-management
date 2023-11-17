import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CoreService } from '../../services/core/core.service';
import { MatDialog } from '@angular/material/dialog';
import { ResetPasswordDialogComponent } from '../reset-password/reset-password-dialog/reset-password-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private core: CoreService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
        ),
      ]),
    });
  }

  ngOnInit(): void {}

  sendLoginData() {
    if (this.loginForm.valid) {
      this.core.login(this.loginForm.getRawValue()).subscribe(
        (res: any) => {
          debugger;
          console.log(res);

          localStorage.setItem('token', res.token);
        },
        (error) => {
          this.loginError(error);
        }
      );
    } else {
      this.loginError('Login Form is not Valid');
    }
  }

  openResetPasswordDialog(email) {
    const dialogRef = this.dialog.open(ResetPasswordDialogComponent, {
      data: {
        email,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  loginSuccess() {
    this.toastr.success('User logged In :)');
  }

  loginError(errMessage) {
    this.toastr.error(`${errMessage.message}`);
  }
}
