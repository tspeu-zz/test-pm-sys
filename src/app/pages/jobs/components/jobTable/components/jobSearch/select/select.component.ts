import {Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Rx';
//import {ListComponent} from '../list/index';ListComponent
//import {CustomerService} from '../services/customer.services';
import {HoverTable} from '../../hoverTable';
import {BaCard} from '../../../../../../../theme/components';
//import {Job} from '../../job';
import { JobsService } from '../../../../../../../services';
import { NamesService } from '../../../../../../../services';

@Component({

    selector: 'select-component',//app/costumer/
    template: require('./select.component.html'),
    styles: [require('./style-select.scss')],
    directives : [HoverTable, BaCard]
     // inputs : ['managers', 'brands','types'],
})
export class SelectComponent implements OnInit{ 
	//@Input() customer : {id : number, name : string} ;

	//@Output() searchTable : EventEmitter<any> ;
	
	//jobs : Array<any []>;
	//dato : any = [];
	//managers : Array<string []> = []
	
/* list of jobs */
	jobs = [];
/* name of categories*/
	namesJobs : Array<any []>= [];
//store name in the select component
	managerId : string ;
	brandId : string;
	typeId : string;
	storeId : string;
	statusId : string;
	clientId: string;
/*labels names */
	labels = {'manager': 'Manager', 'brand':'Brand',
			'jobtype':'JobType', 'store':'Store',
			'status': 'Status','client': 'Client'};

	constructor(private jobsService: JobsService, private namesService: NamesService){

	

	}
		//this.searchTable = new EventEmitter <any>();

//TODO ADD date component
	 jobsNames = [];
	ngOnInit() {
//call service to for the names of every categorie
	
		this.namesService.getNames()
    		.subscribe((names) => {
    			console.log(names),
    			this.namesJobs= names.data[0];
    			this.jobsNames.push(this.namesJobs);
    		
    			this.jobsNames[0].manager.push({id:"0", name:"Any Project Manager"});
    			//console.info("names"+JSON.stringify(this.jobsNames[0].manager));
    			this.jobsNames[0].brand.push({id:"0", name:"Any Brand"});
    			this.jobsNames[0].client.push({id:"0", name:"Any Client"});
    			this.jobsNames[0].status.push({id:"0", name:"Any Status"});
    			this.jobsNames[0].type.push({id:"0", name:"Any Job Type"});
    			this.jobsNames[0].store.push({id:"0", name:"Any Store"});

				//console.info("names:"+JSON.stringify(this.jobsNames[0]));

				this.jobsNames = this.jobsNames.sort(function(a,b){
				if(a.id < b.id) return -1;
				if(a.id > b.id) return 1;
				else return 0;	
			
			})
	/*	*/
    		

    		});


		this.managerId = "Any Project Manager";
		this.brandId = "Any Brand";
		this.typeId = "Any Job Type";
		this.storeId = "Any Store";
		this.statusId ="Any Status";
		this.clientId ="Any Client";

	}

	onSelect() { 
		let params: string = "";
		if(this.managerId!="Any Project Manager"){
			params += "manager="+this.managerId+"&";
		}

		if(this.brandId!="Any Brand"){
			params += "brand="+this.brandId+"&";
		}

		if(this.typeId!="Any Job Type"){
			params += "type="+this.typeId+"&";
		}

		if(this.storeId!="Any Store"){
			params += "store="+this.storeId+"&";
		}

		if(this.statusId!="Any Status"){
			params += "status="+this.statusId+"&";
		}

		if(this.clientId!="Any Client"){
			params += "client="+this.clientId;
		}

		this.jobsService.getJobsSearch(params)
		.subscribe((jobs) => {
			this.jobs = jobs.data
			.sort(function(a,b){
				if(a.jobid < b.jobid) return -1;
				if(a.jobid > b.jobid) return 1;
				else return 0;	
			})
		});
  }
}