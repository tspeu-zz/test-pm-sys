import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';
import {DropdownInputs} from './components/dropdownInputs';
// import {StandardInputs} from './components/standardInputs';
// import {ValidationInputs} from './components/validationInputs';
// import {GroupInputs} from './components/groupInputs';
// import {CheckboxInputs} from './components/checkboxInputs';
// import {Rating} from './components/ratinginputs';


@Component({
  selector: 'newJob',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, DropdownInputs],//StandardInputs, ValidationInputs, GroupInputs, CheckboxInputs, Rating
  template: require('./newJob.html'),
  providers: []
})
export class NewJob {

  constructor() {
  }
}
