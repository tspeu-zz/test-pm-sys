import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';
import {DropdownInputs} from './components/dropdownInputs';


@Component({
  selector: 'editJob',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, DropdownInputs],
  template: require('./editJob.html'),
  providers: []
})
export class EditJob {

  constructor() {
  }
}
