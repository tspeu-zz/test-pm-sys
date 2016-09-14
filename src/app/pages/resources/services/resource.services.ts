import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

const URL_MARKERS = 'app/data/resource-markers.json';

export class Resource{
	constructor(public jobid: string,public manager:string,
		public brand:string,public type:string){ }
}



@Injectable()
export class ResourceService {

	constructor(private _http : Http){ }

	_handleError(err : any){
		console.log(err);
		//throw error;
		return Observable.throw(err);
	}	

	getMarkers(){
	return this._http.get(URL_MARKERS)
		.map((res : Response) => res.json())
		.catch(this._handleError);
	}
}