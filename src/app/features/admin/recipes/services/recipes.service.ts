import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private _http: HttpClient) {}

  getRecipes(data: any): Observable<any> {
    return this._http.get('Recipe', { params: data });
  }

  addRecipe(data: any): Observable<any> {
    return this._http.post('Recipe', data);
  }
  delRecipe(id: number): Observable<any> {
    return this._http.delete(`Recipe/${id}`);
  }
  updateRecipe(id: number, data: any): Observable<any> {
    return this._http.put(`Recipe/${id}`, { name: data });
  }
}
