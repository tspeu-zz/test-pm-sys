import {Component, ViewEncapsulation} from '@angular/core';
import {BaCard} from '../../../../theme/components';
import {StoreSelect} from '../storeSelect/storeSelect.component';
import {StoreDetail} from '../storeDetail/index';

@Component({
  selector: 'store-list',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, StoreSelect , StoreDetail],
  template: require('./storeList.html'),
  providers: []
})
export class StoreList {

  constructor() {
  }
}
