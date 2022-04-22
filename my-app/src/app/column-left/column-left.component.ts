import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-column-left',
  templateUrl: './column-left.component.html',
  styleUrls: ['./column-left.component.less']
})
export class ColumnLeftComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'column-left inside-container';

  constructor() { }

  ngOnInit(): void {
  }

}
