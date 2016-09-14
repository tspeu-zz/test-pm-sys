import {Component} from '@angular/core';


@Component({
  selector: 'jobs',
  pipes: [],
  directives: [],
  providers: [],
  styles: [],
  template: `
  	<router-outlet></router-outlet>
  	`
})
export class Jobs {
	isNewJob = false;

  constructor() {
  }

  onNotify(e:boolean){
  	this.isNewJob=e;
  }
}
