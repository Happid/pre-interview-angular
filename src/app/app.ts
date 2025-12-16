import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  codeExample = `
    //ts
    import { FormsModule } from '@angular/forms';

    @NgModule({
      imports: [FormsModule]
    })
    export class AppModule {
      name = '';
    }

    // html
    <input type="text" [(ngModel)]="name">
    <p>Nama: {{ name }}</p>
  `;


}
