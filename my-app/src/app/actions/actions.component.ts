import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.less']
})
export class ActionsComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'actions _mar-top-actions';

  constructor() { }

  ngOnInit(): void {
  }

}
