import { Component } from '@angular/core';
import { from } from 'rxjs';

import {RESTORANTS, Restorant} from 'src/Data/restorants'
import { CityService } from '../city.service';

@Component({
  selector: 'app-restaurants-component',
  templateUrl: './restaurants-component.component.html',
  styleUrls: ['./restaurants-component.component.css']
})
export class RestaurantsComponentComponent {

  
  constructor(private cityService: CityService){}

  listAllRestaurants():Restorant[]{
    console.log("rest component called")
    return this.cityService.listAllRestaurants();
  }

}
