import { Injectable, signal } from '@angular/core';

export interface Coffee {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const COFFEE_LIST: Coffee[] = [
  {
    id: 1,
    name: 'Latte Coffee',
    price: 15,
    image: 'assets/images/latte.jpg',
    description: 'Smooth and creamy coffee with steamed milk'
  },
  {
    id: 2,
    name: 'Macchiato Coffee',
    price: 18,
    image: 'assets/images/macchiato.jpg',
    description: 'Espresso with a dash of frothy milk'
  },
  {
    id: 3,
    name: 'Iced Coffee',
    price: 14,
    image: 'assets/images/iced.jpg',
    description: 'Chilled coffee served over ice'
  },
  {
    id: 4,
    name: 'Espresso',
    price: 12,
    image: 'assets/images/espresso.jpg',
    description: 'Strong and concentrated coffee shot'
  }
];

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private allCoffees = COFFEE_LIST;
  private coffees = signal<Coffee[]>([...this.allCoffees]);

  selectedCoffee = signal<string>('');

  getCoffees() {
    return this.coffees;
  }

  searchCoffees(query: string) {
    if (!query) {
      this.coffees.set([...this.allCoffees]);
      return;
    }
    const filtered = this.allCoffees.filter(coffee =>
      coffee.name.toLowerCase().includes(query.toLowerCase())
    );
    this.coffees.set(filtered);
  }

  setSelectedCoffee(name: string) {
    this.selectedCoffee.set(name);
  }
}
