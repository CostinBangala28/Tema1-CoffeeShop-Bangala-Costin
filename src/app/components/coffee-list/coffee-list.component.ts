import { Component, inject } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { CoffeeCardComponent } from '../coffee-card/coffee-card.component';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CoffeeCardComponent],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.scss'
})
export class CoffeeListComponent {
  private coffeeService = inject(CoffeeService);
  coffees = this.coffeeService.getCoffees();

  onOrderCoffee(coffeeName: string) {
    this.coffeeService.setSelectedCoffee(coffeeName);
  }
}
