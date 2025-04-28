import { Component, input, output } from '@angular/core';
import { Coffee } from '../../services/coffee.service';

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [],
  templateUrl: './coffee-card.component.html',
  styleUrl: './coffee-card.component.scss'
})
export class CoffeeCardComponent {
  coffee = input.required<Coffee>();
  orderCoffee = output<string>();

  onOrder() {
    this.orderCoffee.emit(this.coffee().name);
  }
}
