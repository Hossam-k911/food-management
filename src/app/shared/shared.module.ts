import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [CommonModule, SharedRoutingModule, MatButtonModule, MatIconModule],
  exports: [MatButtonModule, MatIconModule],
})
export class SharedModule {}
