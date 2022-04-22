import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  @HostBinding('attr.class') cssClass = 'search search-field__search';

  modelText = '';
  indexVue = false;

  showText() {
    this.indexVue = !this.indexVue;
  }
}
