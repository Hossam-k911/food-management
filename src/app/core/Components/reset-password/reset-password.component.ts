import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from '../../services/core/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPassword: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private core: CoreService,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private _router: Router
  ) {
    this.resetPassword = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      seed: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
        ),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  sendResetPassword() {
    this.core
      .resetPassword(this.resetPassword.getRawValue())
      .subscribe((res: any) => {
        debugger;

        this.toastr.success(`${res.message}`);
        this._router.navigate([`/login`]);
      });
  }
}
