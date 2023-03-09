import { Injectable } from '@angular/core';
import { CITIES, City } from 'src/Data/cities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  searchCity(cityName: string): Observable<City> {
    const filteredCities = CITIES.filter(city => city.name.toLocaleLowerCase()
      .includes(cityName?.toLocaleLowerCase() || ''));
    return filteredCities.length > 0 ? new Observable<City>(observer => {
      observer.next(filteredCities[0]);
      observer.complete();
    }) : new Observable<City>(observer => observer.error('City not found'));
  }

  
}
