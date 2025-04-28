import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoffeeService } from '../../services/coffee.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private coffeeService = inject(CoffeeService);
  searchQuery = '';

  onSearch() {
    this.coffeeService.searchCoffees(this.searchQuery);
  }
}
