import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.less']
})
export class SearchFieldComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'search-field';

  constructor() { }

  ngOnInit(): void {
  }

}
