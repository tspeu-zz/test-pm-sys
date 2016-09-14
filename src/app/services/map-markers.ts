import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable()
export class MarkersService {

	path: string = '/map_markers';

	constructor(private apiService: ApiService){}

	createMarker(marker){
		return this.apiService.post(this.path, marker);
	}

	getMarkers(){
		return this.apiService.get(this.path);
	}

	getMarkersSearch(search: string){
		return this.apiService.get(`${this.path}?${search}`);
	}

	deleteMarker(marker){
		return this.apiService.delete(`${this.path}/${marker.id}`);
	}
}