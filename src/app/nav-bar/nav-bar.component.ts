import { Component, OnInit, Output } from '@angular/core';
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


  constructor(){}

  ngOnInit(): void {
  
  }
  

  onCityClick(city: City) : void{
    this.cities = this.cities.filter(c => c.name == city.name);
  }
}
