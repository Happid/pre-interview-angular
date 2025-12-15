import { Injectable } from '@angular/core';
import { Mobil } from '../models/mobil.model';
import { MobilBensin } from '../models/mobil-bensin.model';
import { MobilListrik } from '../models/mobil-listrik.model';

@Injectable({
  providedIn: 'root',
})
export class MobilService {
  private mobil!: Mobil;

  pilihMobilBensin() {
    this.mobil = new MobilBensin('Toyota', 'Hitam');
    return this.mobil.nyalakanMesin();
  }

  pilihMobilListrik() {
    this.mobil = new MobilListrik('Tesla', 'Putih');
    return this.mobil.nyalakanMesin();
  }

  gas() {
    this.mobil.gas();
  }

  rem() {
    this.mobil.rem();
  }

  getKecepatan(): number {
    return this.mobil ? this.mobil.getKecepatan() : 0;
  }

  getMobil(): Mobil {
    return this.mobil;
  }
}
