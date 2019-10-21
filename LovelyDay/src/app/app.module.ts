import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { DetailsComponent } from './pages/details/details.component';
import { AddCardComponent } from './pages/add-card/add-card.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    Component,
    AppComponent,
    WeatherCardComponent,
    DetailsComponent,
    WeatherCardComponent,
    AddCardComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
