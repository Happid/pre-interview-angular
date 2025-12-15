import { Mobil } from './mobil.model';

export class MobilListrik extends Mobil {
  nyalakanMesin(): string {
    return `Mobil listrik ${this.merek} aktif ⚡`;
  }
}
