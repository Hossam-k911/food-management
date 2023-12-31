import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CoreService } from 'src/app/core/services/core/core.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrls: ['./reset-password-dialog.component.scss'],
})
export class ResetPasswordDialogComponent implements OnInit {
  resetForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private core: CoreService,
    private toastr: ToastrService,
    private _router: Router,

    @Inject(MAT_DIALOG_DATA) public email: any,
    public dialog: MatDialogRef<ResetPasswordDialogComponent>
  ) {
    this.resetForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
    debugger;
    if (this.email) {
      this.resetForm.get('email').setValue(this.email.email);
    }
  }

  sendMailtoReset() {
    debugger;
    this.core
      .resetWithEmail(this.resetForm.getRawValue())
      .subscribe((res: any) => {
        debugger;
        this.toastr.success(`${res.message}`);
        this._router.navigate([`/reset-password`]);

        this.dialog.close();
      });
  }
}
