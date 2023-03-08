import { Component } from '@angular/core';
import { from } from 'rxjs';

import {RESTORANTS, Restorant} from 'src/Data/restorants'

@Component({
  selector: 'app-restaurants-component',
  templateUrl: './restaurants-component.component.html',
  styleUrls: ['./restaurants-component.component.css']
})
export class RestaurantsComponentComponent {
  restaurants: Restorant []=RESTORANTS;
  

}
