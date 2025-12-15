import { Mobil } from './mobil.model';

export class MobilBensin extends Mobil {
  nyalakanMesin(): string {
    return `Mobil bensin ${this.merek} menyala 🚗`;
  }
}
