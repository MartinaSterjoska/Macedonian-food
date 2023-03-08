import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CITIES, City } from 'src/Data/cities';
import { NavigationEnd, Router } from '@angular/router'
import {ActivatedRoute} from '@angular/router';
import { filter } from 'rxjs';
import { AstVisitor } from '@angular/compiler';



@Component({
  selector: 'city-component',
  templateUrl: './city-component.component.html',
  styleUrls: ['./city-component.component.css']
})
export class CityComponentComponent implements OnInit{

  @Input() city: City= new City();
  cities: City[] = CITIES;
  cityName:any;
  
  constructor(private router: Router, private route: ActivatedRoute){

  }

  
  
  ngOnInit(){

    // this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
    //   console.log(event);
    //   console.log(this.cityName);
    //   this.selectedCity = this.cities.find(x => x.name === this.cityName);
    //   this.cityName = this.route.snapshot.paramMap.get('city');
    //   console.log(this.selectedCity.name);
    // });
    
  }

// onClickButton():void{
// // this.onCityClick.emit(this.selectedCity);
// }





  // onCityClick(city: ICity) {
  //   this.selectedCity = city;
  // }
}


