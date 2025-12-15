import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobilService } from './services/mobil.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  pesan = '';

  constructor(public mobilService: MobilService) {}

  pilihBensin() {
    this.pesan = this.mobilService.pilihMobilBensin();
  }

  pilihListrik() {
    this.pesan = this.mobilService.pilihMobilListrik();
  }

  gas() {
    this.mobilService.gas();
  }

  rem() {
    this.mobilService.rem();
  }
}
