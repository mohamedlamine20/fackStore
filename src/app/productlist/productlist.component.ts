import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements  OnInit {
  products!:Observable<Product[]>;

  constructor(private productService:ProductService,private route:Router,private activeRoute:ActivatedRoute){

  }
  ngOnInit(): void {
  this.productService.categorySubject.subscribe(
    {
      next:res=>this.leadProducts(res),

    }
  )
  this.productService.emitCategory(this.activeRoute.snapshot.params['category']);
 
  }
  onClick(product:Product){
    this.route.navigateByUrl(`product/${product.id}`)
    

  }

  leadProducts(category:string){
    this.products = this.productService.getProductsByCategories(category)
  }
}
