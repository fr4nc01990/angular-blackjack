import { Injectable } from '@angular/core';
import { CartaDTO } from '../interfaces/cartas.interface';
import { ShuffleService } from './shuffle.service';

@Injectable({
  providedIn: 'root'
})
export class MazoService {
  valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  palos = ['C', 'D', 'H', 'S'];

  constructor(private shuffleService: ShuffleService) {}

  generarMazo(): CartaDTO[] {
    let mazo: CartaDTO[] = [];
    for (let valor of this.valores) {
      for (let palo of this.palos) {
        mazo.push({
          valor: valor,
          palo: palo,
          imagen: `${valor}${palo}.png`,
          valorNumerico: this.obtenerValorNumerico(valor)
        });
      }
    }
    return mazo;
  }

  generarMazoMezclado(): CartaDTO[] {
    const mazo = this.generarMazo();
    return this.shuffleService.shuffle(mazo);
  }

  obtenerValorNumerico(valor: string): number {
    if (['J', 'Q', 'K'].includes(valor)) {
      return 10;
    }
    if (valor === 'A') {
      return 11;
    }
    return parseInt(valor, 10);
  }
}

       

      





