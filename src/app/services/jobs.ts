import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { Job } from '../pages/jobs/job';

@Injectable()
export class JobsService {

	path: string = '/jobs';

	constructor(private apiService: ApiService){}

	createJob(job : Job){
		return this.apiService.post(this.path, job);
	}

	editJob(job){
		return this.apiService.put(`${this.path}/${job._id}`, job);
	}

	getJobs(){
		return this.apiService.get(this.path);
	}

	getJobsSearch(search: string){
		return this.apiService.get(`${this.path}?${search}`);
	}

	deleteJob(job){
		return this.apiService.delete(`${this.path}/${job.id}`);
	}
}