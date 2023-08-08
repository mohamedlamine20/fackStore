import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'',component:ProductlistComponent},
  {path:'product/category/:category',component:ProductlistComponent},
  {path:'product/:id',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
