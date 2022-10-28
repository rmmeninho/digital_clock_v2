import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelojV2Component } from './components/reloj-v2/reloj-v2.component';
import { WeatherV1Component } from './components/weather-v1/weather-v1.component';

@NgModule({
  declarations: [
    AppComponent,
    RelojV2Component,
    WeatherV1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
