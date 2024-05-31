import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { JugadoresDTO } from '../../interfaces/jugadores.interface';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css'
})
export class JugadoresComponent implements OnInit {
  public jugadores: JugadoresDTO[] = [];

  constructor(public gameService: GameService) {} // Cambiado a público

  ngOnInit(): void {
    this.jugadores = this.gameService.getJugadores();
  }
}
