import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CITIES, City } from '../../Data/cities' 
import { RESTORANTS, Restorant } from '../../Data/restorants' 

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit{
  searchTerm=""
  

  cities = CITIES;
  restaurants = RESTORANTS;
  //selectedCity: City | undefined;
  // @Input() cityInput: City = new City();
  // @Output() cityEmitter  = new EventEmitter<City>();


  constructor(private router: Router){}

  ngOnInit(): void {
  
  }
  

  get getFilteredCity(): City {
     const filteredCities =  this.cities.filter(city => city.name.toLocaleLowerCase()
    .includes(this.searchTerm.toLocaleLowerCase()));
    console.log(filteredCities[0])
    this.router.navigate(['city',filteredCities[0].name])
    return filteredCities[0];
  }
  // onCityClick(event:Event, city:City) : void{
    //this.selectedCity = this.cities.find(c => c.name == city.name);
  //   this.cityInput=city;
  //   this.cityEmitter.emit(city);
  // }


}
