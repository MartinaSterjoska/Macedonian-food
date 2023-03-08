import { Component } from '@angular/core';
import { CITIES, City } from 'src/Data/cities';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Component logic goes here
  cities: City[] = CITIES;
  selectedCity: City | undefined;

}








