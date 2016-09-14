import {Component, ViewEncapsulation, OnInit } from '@angular/core';

import {BaCard} from '../../../../../../theme/components';
// import {BorderedTable} from './components/borderedTable';
// import {CondensedTable} from './components/condensedTable';
// import {StripedTable} from './components/stripedTable';
// import {ContextualTable} from './components/contextualTable';
// import {ResponsiveTable} from './components/responsiveTable';

//import {DropdownButtons} from './dropdownButtons';
import {SelectComponent} from './select/select.component';
//import {Job} from '../job';



@Component({
  selector: 'job-search',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, SelectComponent],//,DropdownButtons BorderedTable, CondensedTable, StripedTable, ContextualTable, ResponsiveTable
  styles: [require('./jobSearch.scss')],
  template: require('./jobSearch.html'),
  providers: []
})
export class JobSearch implements OnInit{

  

  constructor() {

  }

  ngOnInit(){

  	
  }

  	

}
