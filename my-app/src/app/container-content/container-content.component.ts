import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-container-content',
  templateUrl: './container-content.component.html',
  styleUrls: ['./container-content.component.less']
})
export class ContainerContentComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'container-content';

  constructor() { }

  ngOnInit(): void {
  }

}
