import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrls: ['./reset-password-dialog.component.scss'],
})
export class ResetPasswordDialogComponent implements OnInit {
  resetForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public email: { name: string },
    public dialog: MatDialogRef<ResetPasswordDialogComponent>
  ) {}

  ngOnInit(): void {}
}
