import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-c',
  templateUrl: './app-c.component.html',
  styleUrls: ['./app-c.component.less']
})
export class AppCComponent {
  @Input() img = '';
  @Input() text = '';
  @Input() class_img = '';
  @Input() class_text = '';

}
