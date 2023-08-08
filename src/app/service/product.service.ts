import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   url :string='https://fakestoreapi.com/products'

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
  }

  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`)
  }
  getCategories():Observable<string[]>{
    return this.http.get<string[]>(`${this.url}/categories`)
  }

  getProductsByCategories(category:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/category/${category}`)
  }
  categorySubject = new Subject<string>()
  emitCategory(value:string){
    this.categorySubject.next(value);

  }
 
   




}
