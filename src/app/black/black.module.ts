import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesaDelJuegoComponent } from './pages/mesa-del-juego/mesa-del-juego.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { CartaComponent } from './components/carta/carta.component';



@NgModule({
  declarations: [
    MesaDelJuegoComponent,
    JugadoresComponent,
    CartaComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    MesaDelJuegoComponent
  ]


})
export class BlackModule { }
