import { Component } from '@angular/core';
import { CITIES } from './../../Data/cities' 

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  cities = CITIES;
}
