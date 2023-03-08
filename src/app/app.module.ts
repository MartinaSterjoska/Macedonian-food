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



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    FooterComponentsComponent,
    CityComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
