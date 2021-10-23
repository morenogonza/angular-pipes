import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunesComponent } from './pages/comunes/comunes.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';

@NgModule({
  declarations: [
    ComunesComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,

    // pipes personalizados
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe,
  ],
  exports: [
    ComunesComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
})
export class VentasModule {}
