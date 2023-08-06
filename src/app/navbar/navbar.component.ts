import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isVisible:boolean=false;
  click(){    
    this.isVisible=!this.isVisible;
  }
}
