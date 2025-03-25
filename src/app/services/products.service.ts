import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = "http://localhost:3000/products";



  constructor(private http : HttpClient) { 
  }

  fetchProducts() : Observable<Product[]> {
    return  this.http.get<Product[]>(this.apiUrl);
  }

  



}
