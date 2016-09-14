import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable()
export class StoresService {

	path: string = '/stores';

	constructor(private apiService: ApiService){}

	createStore(Store){
		return this.apiService.post(this.path, Store);
	}

	getStores(){
		return this.apiService.get(this.path);
	}

	deleteStore(Store){
		return this.apiService.delete(`${this.path}/${Store.id}`);
	}

	getStoreSearch(search: string){
		return this.apiService.get(`${this.path}?${search}`);
	}

	editStore(store){
		return this.apiService.put(`${this.path}/${store._id}`, store);
	}
}