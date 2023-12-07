import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MoviesgridComponent } from './components/moviesgrid/moviesgrid.component';
import { StarRatingComponent } from './components/starrating/starrating.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    LandingpageComponent,
    MoviesgridComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
