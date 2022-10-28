import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/maps/services/places.service';

@Component({
  selector: 'app-weather-v1',
  templateUrl: './weather-v1.component.html',
  styleUrls: ['./weather-v1.component.css']
})
export class WeatherV1Component implements OnInit {

  public location: any;
  public hoy: any;
  public dethoy: any;
  public lati: any;
  public lon: any;

  constructor(private placesService: PlacesService) {

  }

  async ngOnInit(){
    
    this.location = await this.placesService.getUserLocation();
    this.hoy = this.getWeatherData(String(this.location.longitude), String(this.location.longitude));
    this.dethoy = this.hoy.dataseries.slice(0, 1)[0];
    this.lati = String(this.location.latitude);

    //const dubi = await this.obtenerDatosUbicacion();
    //this.lon = dubi.city;
  }


  async getWeatherData(longitude: string, latitude: string) {
    let response = await fetch(`http://www.7timer.info/bin/civillight.php?lon=${longitude}&lat=${latitude}&ac=0&unit=metric&output=json`);
    return await response.json();
  }

  /*
  async obtenerDatosUbicacion() {
    const response = await fetch(`https://freegeoip.app/json/`);
    return await response.json();
  }
  */
}
