import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Category } from '../models/category';

const API_URL = "http://localhost:3000/categories";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private _categories =signal<Category[]>([])
  readonly categories = computed(this._categories)

  constructor(private http:HttpClient) {
    this.init();
  }

  init(): void {
      this.http.get<Category[]>(API_URL).subscribe({
        next: (curretCategories) => {
            console.log(curretCategories);
            this._categories.set(curretCategories);
        }
      }
      
  );
}

  


}
