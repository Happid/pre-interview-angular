export abstract class Mobil {
  protected kecepatan: number = 0;

  constructor(
    public merek: string,
    public warna: string,
  ) {}

  abstract nyalakanMesin(): string;

  gas(): void {
    this.kecepatan += 10;
  }

  rem(): void {
    this.kecepatan = Math.max(0, this.kecepatan - 10);
  }

  getKecepatan(): number {
    return this.kecepatan;
  }
}
