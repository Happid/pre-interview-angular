import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe,
  SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { TruncatePipe } from './custom-pipe/truncate-pipe';
import { EmptyPipe } from './custom-pipe/empty-pipe';

interface Pizza {
  id: string;
  name: string;
  price: number;
}

const getPizzas$: Observable<Pizza[]> = of([
  { id: "j8P9sz", name: "Pepperoni", price: 899 },
  { id: "tMot06", name: "Supreme", price: 999 },
  { id: "x9sD3g", name: "Sizzler", price: 899 },
]);

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TitleCasePipe,
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    PercentPipe,
    DecimalPipe,
    CurrencyPipe,
    AsyncPipe,
    SlicePipe,
    JsonPipe,
    TruncatePipe,
    EmptyPipe,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  tempDate = new Date();
  pizzas$!: Observable<Pizza[]>;
  tempObject = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };

  ngOnInit() {
    this.pizzas$ = getPizzas$;
  }
}
