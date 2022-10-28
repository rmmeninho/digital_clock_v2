import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public usserLocation: [number, number] | undefined;
  

  get isUserLocationReady(): boolean{
    return !!this.usserLocation;
  }

  constructor() {
    this.getUserLocation;
   }

  getUserLocation(): Promise<[number,number]>{

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.usserLocation = [coords.longitude, coords.latitude];
          resolve(this.usserLocation);
        },
        (err) => {
          alert('No se pudo obtener la geolocalización');
          console.log(err);
          reject();
        }
      );
    })
  }
}
