import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable()
export class ResourcesService {

	path: string = '/resources';

	constructor(private apiService: ApiService){}

	createResource(resource){
		return this.apiService.post(this.path, resource);
	}

	getResources(){
		return this.apiService.get(this.path);
	}

	deleteResource(resource){
		return this.apiService.delete(`${this.path}/${resource.id}`);
	}
}