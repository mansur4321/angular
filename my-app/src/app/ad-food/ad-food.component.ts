import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-ad-food',
  templateUrl: './ad-food.component.html',
  styleUrls: ['./ad-food.component.less']
})
export class AdFoodComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'ad-food _content-sidebar-framing'

  constructor() { }

  ngOnInit(): void {
  }

}
