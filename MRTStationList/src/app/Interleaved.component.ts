import { Component } from '@angular/core';

@Component({
  selector:'app-Interleaved',
  template: `
    <h2>Interleaved</h2>
    <div>Normal Interleaved Number: <input [(ngModel)]="power"></div>
    <p>
      Interleaved Numbers: {{power | interleaved}}
    </p>
  `
})

export class InterleavedComponent {
  power = 1;
}
