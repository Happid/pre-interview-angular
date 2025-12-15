import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = 'Happid';

  sayHello() {
    console.log("class function", this.name);
  }

  sayHi = () => {
    console.log("arrow function", this.name);
  };
  protected readonly setTimeout = setTimeout;
}
