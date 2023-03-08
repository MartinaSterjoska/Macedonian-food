import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { CITIES, City } from '../../Data/cities' 
import { RESTORANTS, Restorant } from '../../Data/restorants' 

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit{

  cities = CITIES;
  restaurants = RESTORANTS;
  //selectedCity: City | undefined;
  @Input() cityInput: City = new City();
  @Output() cityEmitter  = new EventEmitter<City>();


  constructor(){}

  ngOnInit(): void {
  
  }
  

  onCityClick(event:Event, city:City) : void{
    //this.selectedCity = this.cities.find(c => c.name == city.name);
    this.cityInput=city;
    this.cityEmitter.emit(city);
  }


}
