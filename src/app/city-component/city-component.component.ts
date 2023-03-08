import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CITIES, City } from 'src/Data/cities';





@Component({
  selector: 'app-city-component',
  templateUrl: './city-component.component.html',
  styleUrls: ['./city-component.component.css']
})
export class CityComponentComponent implements OnInit{

  @Input() selectedCity: City = new City();
  @Output() onCityClick = new EventEmitter<City>();
  cities: City[] = CITIES;

constructor(){
}

ngOnInit(){

}

onClickButton():void{
this.onCityClick.emit(this.selectedCity);
}



  
  


  // onCityClick(city: ICity) {
  //   this.selectedCity = city;
  // }
}


