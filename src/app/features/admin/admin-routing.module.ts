import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/components/dashboard/dashboard.component';
import { HomeComponent } from 'src/app/shared/Components/home/home.component';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('././users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('././recipes/recipes.module').then((m) => m.RecipesModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('././categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
