import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent {

  @HostBinding('attr.class') cssClass = 'account';

}
