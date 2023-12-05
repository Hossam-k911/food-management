import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipiesRoutingModule } from './recipies-routing.module';
import { RecipiesComponent } from './components/recipies/recipies.component';


@NgModule({
  declarations: [RecipiesComponent],
  imports: [
    CommonModule,
    RecipiesRoutingModule
  ]
})
export class RecipiesModule { }
