import {Component, ViewEncapsulation, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';

import {JobTableService} from './jobTable.service';
import {BaCard} from '../../../../theme/components';
//import {HoverTable} from './components/hoverTable';
import {JobSearch} from './components/jobSearch';

//import {JobService} from './../../services/job.services';
// import {BorderedTable} from './components/borderedTable';
// import {CondensedTable} from './components/condensedTable';
// import {StripedTable} from './components/stripedTable';
// import {ContextualTable} from './components/contextualTable';
// import {ResponsiveTable} from './components/responsiveTable';

@Component({
  selector: 'job-table',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard,  JobSearch],//HoverTable,, BorderedTable, CondensedTable, StripedTable, ContextualTable, ResponsiveTable
  styles: [require('./jobTable.scss')],
  template: require('./jobTable.html'),
  providers: [JobTableService]
})
export class JobTable {

	@Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {
  }

  onNewJob(){
  	this.router.navigateByUrl("pages/jobs/newJob");
  }
}
