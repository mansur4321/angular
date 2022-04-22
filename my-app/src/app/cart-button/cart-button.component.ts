import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.less']
})
export class CartButtonComponent {
  @Input() svgContent = '';
  @Input() textContent = '';
  @Input() num = 0;

  constructor() {
    setTimeout(() => {
      this.svgPoln();
    }, 1);
  }

  svgPoln() {
    let elem: HTMLElement | null = document.getElementById(`${this.num}`);
    if (elem != null) {
      elem.innerHTML = this.svgContent;
    }
  }

}
