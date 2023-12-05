import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { SharedService } from '../../shared.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private shared: SharedService,
    public toastr: ToastrService,

    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialogRef<ChangePasswordComponent>
  ) {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: new FormControl(''),
      newPassword: new FormControl(''),
      confirmNewPassword: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onResetRequest(data: string) {
    this.shared
      .changePassword(this.changePasswordForm.value)
      .subscribe((res: any) => {
        debugger;
        this.toastr.success('Password Changed Successfully');
        this.dialog.close();
      });
  }
}
