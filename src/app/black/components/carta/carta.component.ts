import { Component, Input } from '@angular/core';
import { CartaDTO } from '../../interfaces/cartas.interface';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css'
})
export class CartaComponent {

  @Input() 
  cartaSon!: CartaDTO;


}
