import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponentsComponent } from './footer-components/footer-components.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CityComponentComponent } from './city-component/city-component.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RestaurantsComponentComponent } from './restaurants-component/restaurants-component.component';
import { AllCitiesComponent } from './all-cities/all-cities.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    FooterComponentsComponent,
    CityComponentComponent,
    AllCitiesComponent,
    RestaurantsComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    FormsModule,
    MatIconModule,
    RouterModule.forRoot([
      {path: 'city/:name', component: CityComponentComponent},
      {path: 'cities', component: AllCitiesComponent},
      {path: 'restaurants', component: RestaurantsComponentComponent},
      {path: 'home', component: AboutComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
