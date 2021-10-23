import { Component } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html',
  styles: [],
})
export class ComunesComponent {
  nombreLower: string = 'gonzalo';
  nombreUpper: string = 'GONZALO';
  nombreCompleto: string = 'goNzAlO MoREno';

  fecha: Date = new Date();
}
