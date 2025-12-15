import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedButton } from './red-button/red-button';
import { BlueButton } from './blue-button/blue-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RedButton, BlueButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pre-interview-angular');
  x = 's';
}
