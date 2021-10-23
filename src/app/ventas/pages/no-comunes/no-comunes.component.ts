import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Florencia';
  genero: string = 'femenino';

  invitacionMapa = {
    femenino: 'invitarla',
    masculino: 'invitarlo',
  };

  // i18nPlural
  clientes: string[] = ['Coco', 'Valeria', 'Florencia', 'Gonzalo'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarNombre() {
    this.nombre = 'Gonzalo';
    this.genero = 'masculino';
  }

  eliminarCliente() {
    this.clientes.shift();
  }

  // keyValue pipe
  persona = {
    nombre: 'Gonzalo',
    edad: 35,
    direccion: 'Santiago del Estero',
  };

  // jsonPipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  // async Pipe

  // con un Observable
  miObservable = interval(2000);

  // con una promesa
  promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa resuelta');
    }, 3500);
  });
}
