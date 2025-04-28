import { Component, inject } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private coffeeService = inject(CoffeeService);
  selectedCoffee = this.coffeeService.selectedCoffee;
}
