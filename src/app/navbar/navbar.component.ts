import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories:string[]=[]; 
  constructor(private productService:ProductService){

  }

  ngOnInit(): void {
   this.productService.getCategories()
   .subscribe({
    next:(res)=>this.categories=res,
    error:(error)=>console.error(error)
   })
   console.log(this.categories)
  }
  isVisible:boolean=false;
  click(){    
    this.isVisible=!this.isVisible;
  }

  changeCategory(category:string){
    this.productService.emitCategory(category);
  }
}
