import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { PageEvent } from '@angular/material/paginator';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss'],
})
export class RecipiesComponent implements OnInit {
  searchValue: string = '';
  pageSize: number = 25;
  pageNumber: number | undefined = 1;
  tableResponse: ITableRecipe | undefined;
  tableData: any;
  tagId: number = 0;
  tags: ITag[] = [];
  categoryName: string = '';
  categories: ICategory[] = [];
  constructor(
    private _recipes: RecipesService,
    public _helper: HelperService
  ) {}

  ngOnInit(): void {
    this.getTableData();
    this.getAllTags();
    this.getAllCategories();
  }
  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.pageSize = e.pageSize;
    this.pageNumber = this.tableResponse?.pageNumber;

    this.getTableData();
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
  getTableData() {
    let params = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      name: this.searchValue,
      tagId: this.tagId,

      categoryId: this.categoryName,
    };
    console.log(params);

    this._recipes.getRecipes(params).subscribe({
      next: (res: ITableRecipe) => {
        this.tableResponse = res;
        this.tableData = this.tableResponse?.data;
        console.log(this.tableData.length);
      },
    });
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
