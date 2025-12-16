import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pre-interview-angular');
  x = 's';

  code1 = `
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-counter',
      template: \`
        <h2>Counter (Zone.js)</h2>
        <p>{{ counter }}</p>
      \`
    })
    export class CounterComponent implements OnInit {
      counter = 0;

      ngOnInit() {
        setInterval(() => {
          this.counter++;
        }, 1000);
      }
    }
  `;

  code2 = `
    import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

    @Component({
      selector: 'app-counter',
      template: \`
        <h2>Counter (Zoneless)</h2>
        <p>{{ counter }}</p>
      \`,
      // Biasanya dipakai bersama OnPush
      changeDetection: ChangeDetectionStrategy.OnPush
    })
    export class CounterZonelessComponent implements OnInit {
      counter = 0;

      constructor(private cdr: ChangeDetectorRef) {}

      ngOnInit() {
        setInterval(() => {
          this.counter++;
          this.cdr.detectChanges(); // 🔴 WAJIB
        }, 1000);
      }
    }
  `;

  code3 = `
    import { Component, signal } from '@angular/core';

    @Component({
      selector: 'app-counter',
      template: \`
        <h2>Counter (Zoneless + Signal)</h2>
        <p>{{ counter() }}</p>
      \`
    })
    export class CounterSignalComponent {
      counter = signal(0);

      constructor() {
        setInterval(() => {
          this.counter.update(v => v + 1);
        }, 1000);
      }
    }
  `;
}
