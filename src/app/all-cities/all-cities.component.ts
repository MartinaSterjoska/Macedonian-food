import { Component } from '@angular/core';
import { CITIES,City } from 'src/Data/cities';
import { CityService } from '../city.service';

@Component({
  selector: 'app-all-cities',
  templateUrl: './all-cities.component.html',
  styleUrls: ['./all-cities.component.css']
})
export class AllCitiesComponent {

  constructor(private cityService: CityService){}


  listAllCities():City[]{
    console.log("all cities component called")
    return this.cityService.listAllCities();
  }
}
