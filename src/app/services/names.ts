import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable()
export class NamesService {

	path: string = '/names';

	constructor(private apiService: ApiService){}

	createName(name){
		return this.apiService.post(this.path, name);
	}

	getNames(){
		return this.apiService.get(this.path);
	}

	deleteName(name){
		return this.apiService.delete(`${this.path}/${name.id}`);
	}

	getNamesSearch(search: string){
		return this.apiService.get(`${this.path}?${search}`);
	}
	editName(name){
		return this.apiService.put(`${this.path}/${name._id}`, name);
	}
}