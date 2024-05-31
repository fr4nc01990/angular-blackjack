import { Injectable } from '@angular/core';
import { MazoService } from './mazo.service';
import { JugadoresDTO } from '../interfaces/jugadores.interface';
import { CartaDTO } from '../interfaces/cartas.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public cartasJugador1: CartaDTO[] = [];
  public cartasJugador2: CartaDTO[] = [];
  private jugadores: JugadoresDTO[] = [
    { id: 1, nombre: 'Player', puntaje: 0 },
    { id: 2, nombre: 'PC', puntaje: 0 }
  ];
  private mazo: CartaDTO[] = [];
  private jugadorActual: number = 1;

  constructor(private mazoService: MazoService) {}

  nuevoJuego() {
    this.mazo = this.mazoService.generarMazoMezclado();
    this.cartasJugador1 = [];
    this.cartasJugador2 = [];
    this.jugadores.forEach(jugador => jugador.puntaje = 0);
    this.jugadorActual = 1; // Empieza el jugador HUMANO
  }

  pedirCarta(jugadorId: number) {
    const carta = this.mazo.pop();
    if (!carta) return;

    if (jugadorId === 1) {
      this.cartasJugador1.push(carta);
      this.jugadores[0].puntaje += carta.valorNumerico;

      if (this.jugadores[0].puntaje > 21) {
        this.detener();
      }
    } else {
      this.cartasJugador2.push(carta);
      this.jugadores[1].puntaje += carta.valorNumerico;
    }
  }

  detener() {
    this.jugadorActual = 2;
    this.turnoComputadora();
  }

  turnoComputadora() {
    while (this.jugadores[1].puntaje <= this.jugadores[0].puntaje && this.jugadores[1].puntaje <= 21) {
      this.pedirCarta(2);
    }
    this.verificarGanador();
  }

  verificarGanador() {
    const puntajeHumano = this.jugadores[0].puntaje;
    const puntajeComputadora = this.jugadores[1].puntaje;

    setTimeout(() => {
      if (puntajeComputadora === puntajeHumano) {
        alert('Nadie gana :(');
      } else if (puntajeHumano > 21) {
        alert('Computadora gana');
      } else if (puntajeComputadora > 21) {
        alert('Jugador gana');
      } else if (puntajeHumano > puntajeComputadora) {
        alert('Jugador gana');
      } else {
        alert('Computadora gana');
      }
    }, 100);
  }

  getJugadores(): JugadoresDTO[] {
    return this.jugadores;
  }
}
