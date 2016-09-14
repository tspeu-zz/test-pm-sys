import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {JobTableService} from '../../jobTable.service';

//import {JobService} from '../../../../services/job.services';

//import { JobsService , NamesService} from '../../../../../../services';

import {Job} from '../../../../job';
import {EditJob} from '../../../editJob/editJob.component';

@Component({
  selector: 'hover-table',
  template: require('./hoverTable.html'),
  styles: [require('./style-table.scss')],
  pipes: [BaAppPicturePipe],
  inputs : ['job'],
})
export class HoverTable implements OnInit{

  metricsTableData:Array<any>;

  //jobs : Array<any>;
//private _jobTableService: JobTableService private _jobService : JobsService, private _namesService : NamesService
  constructor(private router : Router) {
    
    //this.metricsTableData = _jobTableService.jobsData//metricsTableData;
  }

  ngOnInit(){}

  selectJob(job : string){
    //let id : string ="";JSON.stringify()
    console.log(job);
 // this.router.navigateByUrl('/pages/jobs/editJob');
   this.router.navigate(['/pages/jobs/editJob', job]);

  }
  //this.router.navigate(['/jobDetail',a]);
//"pages/jobs/editJob

}
   /*
     this._jobService.getJobs()
     .subscribe((trabajos) => this.jobs = trabajos,
      (err) => { console.log(err); });
     

     this._jobService.getJobs()
     .subscribe((trabajos) => this.jobs = trabajos,
      (err) => { console.log(err); });
     */