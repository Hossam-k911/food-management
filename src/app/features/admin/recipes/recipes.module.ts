import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipiesComponent } from './components/recipies/recipies.component';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: RecipiesComponent },
  { path: 'add-edit-recipe', component: AddEditRecipeComponent },
  { path: 'add-edit-recipe/:id', component: AddEditRecipeComponent },
];

@NgModule({
  declarations: [RecipiesComponent, AddEditRecipeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class RecipesModule {}
