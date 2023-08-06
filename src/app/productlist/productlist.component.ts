import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements  OnInit {
  products:Product[]=[];

  constructor(private productService:ProductService,private route:Router){

  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      {
        next:(res)=>this.products=res,
        error:(error)=>console.error(error)
      }
    )
    
  }
  onClick(product:Product){
    this.route.navigateByUrl(`product/${product.id}`)

  }
}
