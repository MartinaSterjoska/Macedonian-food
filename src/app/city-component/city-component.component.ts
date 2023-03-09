import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CITIES, City } from 'src/Data/cities';
import { NavigationEnd, Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CityService } from '../city.service';


@Component({
  selector: 'city-component',
  templateUrl: './city-component.component.html',
  styleUrls: ['./city-component.component.css']
})
export class CityComponentComponent implements OnInit, OnDestroy {

  @Input() city: City = new City();
  cities: City[] = CITIES;
  cityName: string | null = null;
  private routeSubscription: any;


  constructor(private router: Router, private route: ActivatedRoute,private cityService: CityService) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      if (params.has('name')) {
        this.cityName = params.get('name');
        this.searchCity();
      }
    });
  }

    ngOnDestroy(): void {
      if (this.routeSubscription) {
        this.routeSubscription.unsubscribe();
      }
    }

  searchCity(): void {
    if (this.cityName) {
      this.cityService.searchCity(this.cityName).subscribe(city => {
        this.city = city;
      }, error => {
        console.error(error);
      });
    }
  }

}



// function ngOnDestroy() {
//   throw new Error('Function not implemented.');
// }

