import {Component, HostListener, OnInit, Input} from '@angular/core';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import {JobService} from '../../../../../services/job.services';
@Component({
  selector: 'dropdown-buttons',
  template: require('./dropdownButtons.html'),
  directives: [DROPDOWN_DIRECTIVES ]
})

// TODO: appendToBody does not implemented yet, waiting for it
export class DropdownButtons implements OnInit{

@Input() managerId : string ;

	namesJobs : Array<any []>=[];
	managers : Array<string []> = []
	
	brandId : string;
	typeId : string;

	labels = {'manager': 'Manager', 'brand':'Client',
		'jobtype':'JobType', 
		'store':'Store'};

	public status:{isopen:boolean} = {isopen: false};	

  constructor(private _jobServiceData: JobService) {
  }

  ngOnInit(){

  	this._jobServiceData.getNames().
	  subscribe((trabajos) =>
	  { this.namesJobs = trabajos,
	  	console.log("aQUI EL BOTON DROP");},
				(err) => { console.log(err); })

  }

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
 
  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
    console.log('Dropdown is now: ');
    
  }

  selectManagerId(){
    //this.levelNum = +this.levelNum;
    console.log(this.managerId); 
  }



}
