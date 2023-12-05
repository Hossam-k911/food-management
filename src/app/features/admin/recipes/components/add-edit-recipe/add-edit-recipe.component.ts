import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HelperService } from 'src/app/shared/services/helper.service';
import { RecipesService } from '../../services/recipes.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.scss'],
})
export class AddEditRecipeComponent implements OnInit {
  tags: ITag[] = [];
  tagId: number = 0;
  categories: ICategory[] = [];
  category: string = '';
  imgSrc: any;

  constructor(
    private _helper: HelperService,
    private _recipe: RecipesService,
    private _router: Router,
    private _toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAllTags();
    this.getAllCategories();
  }

  dataForm = new FormGroup({
    name: new FormControl(null),
    description: new FormControl(null),
    price: new FormControl(null),
    tagId: new FormControl(null),
    categoriesIds: new FormControl(null),
    recipeImage: new FormControl(null),
  });

  onSubmit(data: FormGroup) {
    console.log(data.value);
    let myData = new FormData();
    myData.append('name', data.value.name);
    myData.append('description', data.value.description);
    myData.append('price', data.value.price);
    myData.append('tagId', data.value.tagId);
    myData.append('categoriesIds', data.value.categoriesIds);
    myData.append('recipeImage', this.imgSrc, this.imgSrc.name);

    this._recipe.addRecipe(myData).subscribe({
      next: (res) => {
        console.log(res);
        this._toastr.success('Recipe Added Successfuly');
        this._router.navigate(['/dashboard/admin/recipes']);
      },
      error: (err) => {
        this._toastr.error('error');
      },
    });
  }

  getAllTags() {
    this._helper.getTags().subscribe({
      next: (res) => {
        console.log(res);
        this.tags = res;
      },
    });
  }
  getAllCategories() {
    this._helper.getGategories().subscribe({
      next: (res) => {
        console.log(res);
        this.categories = res.data;
      },
    });
  }

  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.imgSrc = event.addedFiles[0];
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
export interface ITag {
  id: number;
  name: string;
  creationDate: number;
  modificationDate: number;
}
export interface ICategory {
  id: number;
  name: string;
  creationDate: number;
  modificationDate: number;
}
export interface IRecipe {
  id: number;
  imagePath: string;
  name: string;

  description: string;
  creationDate: number;
  modificationDate: number;
  price: number;
  category: ICategory[];
  tag: ITag;
}
export interface ITableRecipe {
  pageSize: number;
  pageNumber: number;
  totalNumberOfPages: number;
  totalNumberOfRecords: number;
  data: IRecipe;
}
