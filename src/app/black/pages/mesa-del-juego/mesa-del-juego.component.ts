import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-mesa-del-juego',
  templateUrl: './mesa-del-juego.component.html',
  styleUrl: './mesa-del-juego.component.css'
})
export class MesaDelJuegoComponent {

  

  constructor(public gameService: GameService) {}

  pedirCarta() {
    console.log('Se ha hecho clic en el botón Pedir');
    this.gameService.pedirCarta(1); // 1 representa al jugador HUMANO
  }

  detener() {
    console.log('Se ha hecho clic en el botón Detener');
    this.gameService.detener();
  }

  nuevoJuego() {
    console.log('Se ha hecho clic en el botón Nuevo');
    this.gameService.nuevoJuego();
  }
}
