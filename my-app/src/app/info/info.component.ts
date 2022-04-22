import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'info _wrapper-grid';

  constructor() { }

  ngOnInit(): void {
  }

}
