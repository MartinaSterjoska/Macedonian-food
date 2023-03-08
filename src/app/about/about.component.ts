import { Component } from '@angular/core';
import { CITIES, ICity } from 'src/Data/cities';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Component logic goes here
  cities: ICity[] = CITIES;
  selectedCity: ICity | undefined;

  onCityClick(city: ICity) {
    this.selectedCity = city;
  }
}








