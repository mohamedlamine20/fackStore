import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  id!:number;
  product!:Product;
  constructor(private productService:ProductService,private activeRoute:ActivatedRoute){

  }
  ngOnInit(): void {
   this.id=this.activeRoute.snapshot.params['id'];
   this.productService.getProductById(this.id).
   subscribe({
    next:res=>this.product=res,
    error:(error)=>console.error(error)
   })
  }

}
