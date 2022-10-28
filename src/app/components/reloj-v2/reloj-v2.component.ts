import { animate, state, style, transition, trigger} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
/*
@Component({
  selector: 'app-reloj-v2',
  templateUrl: './reloj-v2.component.html',
  styleUrls: ['./reloj-v2.component.css'],
  animations:[
    trigger('animacionTiempo',[ 
     state('manana', style({
      backgroundImage: "url('../assets/img/manana.jpg')",
     })),
     state('tarde', style({
      backgroundImage: "url('../assets/img/tarde.jpg')",
     })),
     state('atardecer', style({
      backgroundImage: "url('../assets/img/atardecer.jpg')"
    
     })),
     state('noche', style({
      backgroundImage: "url('../assets/img/noche.jpg')"
    
     })),
     transition('manana => tarde', animate('1s')),
     transition('tarde => atardecer', animate('1s')),
     transition('atardecer => noche', animate('1s')),
     transition('noche => manhana', animate('1s')),
    ])
  
  ]
})
*/

@Component({
  selector: 'app-reloj-v2',
  templateUrl: './reloj-v2.component.html',
  styleUrls: ['./reloj-v2.component.css'],
  animations:[
    trigger('animacionTiempo',[ 
     state('manana', style({
      class: 'manana'
     })),
     state('tarde', style({
      backgroud: '.tarde',
     })),
     state('atardecer', style({
      backgroud: '.atardecer',
     })),
     state('noche', style({
      backgroud: '.noche',
     })),
     transition('manana => tarde', animate('1s')),
     transition('tarde => atardecer', animate('1s')),
     transition('atardecer => noche', animate('1s')),
     transition('noche => manana', animate('1s'))
    ])
  ]
})

export class RelojV2Component implements OnInit {
  estadoPantalla = 'manana';
  state: any;
  fecha: any;

  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      this.mostrarFecha();
    }, 1000);

  }

  mostrarFecha(): Date{
  this.fecha = new Date();
 
  this.cambio(this.fecha);
  return this.fecha;
  }
  /*
  cambio(h:Date): void{ 
   
    let hora =  h.getHours();
    if(hora >= 6 && hora < 14){
      this.estadoPantalla = 'manana';
    }
    else if(hora >=14 && hora < 20){
      this.estadoPantalla = 'tarde';
    }
    else if(hora >=20 && hora < 22){
      this.estadoPantalla = 'atardecer';
    }
    else{
      this.estadoPantalla = 'noche';
    }
    
  }
  */
 //Test de las animaciones:
 //Con este método la animación cambiará cada minuto.
  cambio(h:Date): void{ 
   
    let estados: string[] = ['manana','tarde','atardecer','noche'];
    let i: number =  h.getMinutes()%4;
    this.estadoPantalla = estados[i];
    this.state = 'image: url("/assets/img/'+estados[i]+'.jpg"';
  
  }

  
}
