import { Injectable } from '@angular/core';
import { CartaDTO } from '../interfaces/cartas.interface';

@Injectable({
  providedIn: 'root'
})
export class ShuffleService {
  constructor() { }

  shuffle<T>(array: CartaDTO[]): CartaDTO[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
