import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';
//import {DropdownInputs} from './components/dropdownInputs';
// import {StandardInputs} from './components/standardInputs';
// import {ValidationInputs} from './components/validationInputs';
//import {GroupInputs} from './components/groupInputs';
// import {CheckboxInputs} from './components/checkboxInputs';
// import {Rating} from './components/ratinginputs';


@Component({
  selector: 'resources-list',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard],//, DropdownInputs, GroupInputsStandardInputs, ValidationInputs, CheckboxInputs, Rating
  template: require('./resourcesList.html'),
  providers: []
})
export class ResourcesList {

  constructor() {
  }
}
