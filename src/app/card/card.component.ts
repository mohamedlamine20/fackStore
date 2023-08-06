import { Component, Input } from '@angular/core';
import { Product } from '../model/product';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(){

  }
  @Input()
  product!:Product;

 
}
