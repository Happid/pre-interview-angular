import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Highlight } from './custom-directive/highlight';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Highlight],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  tempArray = [1, 2];
  tempSwitchCase = {
    case1: true,
    case2: false,
  };

  sukses: boolean = true;
}
