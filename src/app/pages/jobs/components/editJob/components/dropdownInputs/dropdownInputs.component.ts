import {Component, Input} from '@angular/core';

import {Router , ActivatedRoute  } from '@angular/router';
import {BaCard} from '../../../../../../theme/components';


import { JobsService , NamesService} from '../../../../../../services';

@Component({
  selector: 'dropdown-inputs',
  template: require('./dropdownInputs.html'),
  styles: [require('./style-form.scss')],
  directives: [BaCard ],
  inputs :['editManager','editBrand','editTypejob' ]
})
export class DropdownInputs {

 jobDetails: Array<any []>= [];

//variable to from select options
  managerNew = '';
  brandNew= '';
  typeJobNew='';
  clientNew ='';
  statusJobNew='';
  storeNew='';

  id :string;
  jobId : any;
  actualJob :Array<any []>=[];
  activeEdit : boolean = true;
  manageActiveEdit ={
    'activeManager':true, 'activeBrand':true ,'activeJob': true,
    'activeClient': true, 'activeStatus' : true, 'activeStore': true
  };
  //managerId : string ;
  //edit fields
  editManager : string ="";
  editBrand : string;
  editTypeJob : string;
  editClient: string;
  editStatus :string;
  editStore : string;
  editColor =  "#282828";
  editColorBrand; editColorType; editColorClient; editColorStatus; editColorStore;

//store the actual job 
  jobNow =[];



  constructor(private activatedRoute :ActivatedRoute,
              private router : Router , 
              private _namesServices : NamesService,
              private _jobsService : JobsService) {}

  ngOnInit(){
//service get names data
	 this._namesServices.getNames()
   .subscribe((trabajos) =>{ 
     this.jobDetails = trabajos.data[0]
   })


    this.jobId = this.activatedRoute.params.subscribe(
      params => { this.id = params['id'];
      console.log("this JOBid:"+ this.id);
      this.searchJobId(this.id);

      });
	}

/*TODO select value from Edit dropdown*/
  editFields () {
    //this.activeEdit = this.activeEdit === true ? false : true;
  	console.log("active: "+ this.activeEdit);
  }

   editFieldsManage(active : number, activeEdit : boolean) {
   // this.activeEdit = this.activeEdit === true ? false : true; 
    switch(active){

      case 1 : this.manageActiveEdit.activeManager = this.manageActiveEdit.activeManager === true ? false : true;
               let activeHere :boolean;
               activeEdit = activeEdit === true ? false : true; 
               //this.checkEdit(this.activeEdit);
                console.info(`activeManager: ${active} + ${activeEdit}` );
                break;
      case 2 : this.manageActiveEdit.activeBrand = this.manageActiveEdit.activeBrand === true ? false : true;
               activeEdit = activeEdit === true ? false : true;
                 //this.checkEdit(this.activeEdit);
                console.info(`activeManager: ${active}  +${activeEdit}` );
                break;   
      case 3 : this.manageActiveEdit.activeJob = this.manageActiveEdit.activeJob === true ? false : true;
                activeEdit = activeEdit === true ? false : true;
                console.info(`activeManager: ${active}` );
                break;
      case 4 : this.manageActiveEdit.activeClient = this.manageActiveEdit.activeClient === true ? false : true;
               activeEdit = activeEdit === true ? false : true;
                console.info(`activeManager: ${active}` );
                break;    
      case 5 : this.manageActiveEdit.activeStatus = this.manageActiveEdit.activeStatus === true ? false : true;
               activeEdit = activeEdit === true ? false : true;
                console.info(`activeManager: ${active}` );
                break;                                          
      case 6 : this.manageActiveEdit.activeStore = this.manageActiveEdit.activeStore === true ? false : true;
               activeEdit = activeEdit === true ? false : true; 
                console.info(`activeManager: ${active}` );
                break;          

    }
    

  
 
  }

//dato : string
  selectManagerId(){
        this.editColor = '#fff' ; 
        this.managerNew  = this.editManager;
       // this.editColor = this.editColor === '#282828' ? 'green' : '#282828'; 
        console.log("dentro select:"+this.editManager);
           //this.managerNew = this.jobNow[0].manager;   
    }

//edit with the select options
    selectEdit(color : string, newJ : string, edit : string){ 
        //this.editColor = color;
        newJ = edit;
        console.log("dentro select:"+edit);
    }

    selectBrand(){
        this.editColorBrand = '#fff' ; 
        this.brandNew  = this.editBrand;
    }

    selectTypeJob(){
       this. editColorType = 'green'; 
       this.typeJobNew =this.editTypeJob;
    }

    selectClient(){
        this.editColorClient = 'red';
        this.clientNew= this.editClient; 
    }

    selectStatus(){
      if (this.editStatus ==="Bid"){
         this.editColorStatus = 'blue'; 
      }
      if (this.editStatus ==="Closed"){
         this.editColorStatus = 'pink'; 
      }
      if (this.editStatus ==="Open"){
         this.editColorStatus = '#fff'; 
      }
       this.statusJobNew = this.editStatus ;
    }

    selectStore(){
      this.editColorStore = "purple";
       this.storeNew = this.editStore;
    }


  searchJobId(id : string | number){
      this._jobsService.getJobsSearch("jobid="+id).subscribe(
      (jobs) => {
      this.actualJob = jobs.data[0]//.find(job => job.jobid === id);

      this.jobNow.push(this.actualJob);
// save in the variable of each field
      this.managerNew = this.jobNow[0].manager;
      this.editManager= this.managerNew;
      
      this.brandNew = this.jobNow[0].brand;
      this.editBrand = this.brandNew; 
      
      this.typeJobNew = this.jobNow[0].type;
      this.editTypeJob = this.typeJobNew;
      
      this.clientNew = this.jobNow[0].client;
      this.editClient =  this.clientNew; 

      this.statusJobNew=this.jobNow[0].status;
      this.editStatus =  this.statusJobNew;

      this.storeNew=  this.jobNow[0].store;
      this.editStore = this.storeNew;

        console.log("search JobID:"+JSON.stringify(this.jobNow) + "MANAGER:" +this.jobNow[0].manager);
        console.log("MANAGER ACTUAL:" +this.managerNew + "MARCA:"+this.brandNew);
        },(err) => { console.log(err); });

  }


  cancelButton(){
     this.resetData();
     this.resetColor();
     this.activeEdit= true;
  }

  resetColor(){
     this.editColor = this.editColorType = this.editColorBrand =  
     this.editColorClient = this.editColorStatus = this.editColorStore = 'black';
  }

   resetData(){
     this.managerNew = this.jobNow[0].manager;
     this.brandNew = this.jobNow[0].brand;
     this.typeJobNew =  this.jobNow[0].type;
     this.clientNew =  this.jobNow[0].client;
     this.statusJobNew = this.jobNow[0].status;
     this.storeNew =  this.jobNow[0].store;
   }

  saveButton(){
    this.jobNow[0].manager = this.editManager;
    this.jobNow[0].brand = this.editBrand;
    this.jobNow[0].type = this.editTypeJob;
    this.jobNow[0].client = this.editClient;
    this.jobNow[0].status = this.editStatus;
    this.jobNow[0].store = this.editStore;

    this._jobsService.editJob(this.jobNow[0]).subscribe();
    alert("Job has been updated!");
  }

  resetActiveManager(){

  }
   checkEdit(check : boolean) : boolean{
      check = check === true ? false : true;
      return  check;
      //this.activeEdit = this.activeEdit === true ? false : true; 

   }

}