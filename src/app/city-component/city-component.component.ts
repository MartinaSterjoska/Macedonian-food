import { Component } from '@angular/core';
import { CITIES, ICity } from 'src/Data/cities';




@Component({
  selector: 'app-city-component',
  templateUrl: './city-component.component.html',
  styleUrls: ['./city-component.component.css']
})
export class CityComponentComponent {
  cities: ICity[] = CITIES;
  selectedCity: ICity | undefined;

  onCityClick(city: ICity) {
    this.selectedCity = city;
  }
}


