import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button class="null" *ngIf="!value">
      {{ value }}
    </button>

    <button class="X" *ngIf="value == 'X'">
      {{ value }}
    </button>

    <button class="O" *ngIf="value == 'O'">
      {{ value }}
    </button>
  `,
  styles: [
    `
    button {
      width: 100%;
      height: 100%;
      font-size: clamp(25px, 15vw, 80px);
      font-weight: bold;
      color: white;
      cursor: pointer;
    }

    .null {
      background-color: #051821;
    }

    .X {
      background-color: #266867;
    }

    .O {
      background-color: #f8bc24;
    }
    `
  ]
})
export class SquareComponent {

  @Input() value: 'X' | 'O' | '';

  constructor() {
    this.value = '';
  }
}
