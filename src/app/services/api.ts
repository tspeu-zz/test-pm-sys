import { Http, Headers, Response, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';


@Injectable()
export class ApiService {

	headers: Headers = new Headers({
		'Content-Type': 'application/json',
		Accept: 'application/json'
	})


	api_url: string = 'http://localhost:3030';
//  http://dynamic-pm-test-api.herokuapp.com

	constructor(private http: Http) {}

	private getJson(respone: Response){
		return respone.json();
	}

	private checkForError(response: Response): Response {
		if(response.status >= 200 && response.status < 300){
			return response;
		} else {
			var error = new Error(response.statusText);
			error['response'] = response;
			console.error(error);
			throw error;
		}
	}

	get(path: string): Observable<any>{
		return this.http.get(`${this.api_url}${path}`, {headers: this.headers})
		.map(this.checkForError)
		.catch(err => Observable.throw(err))
		.map(this.getJson);
	}

	post(path: string, body): Observable<any>{
		return this.http.post(
			`${this.api_url}${path}`,
			JSON.stringify(body),
			 {headers: this.headers}
			 )
		.map(this.checkForError)
		.catch(err => Observable.throw(err))
		.map(this.getJson);
	}

	put(path: string, body): Observable<any>{
		return this.http.put(
			`${this.api_url}${path}`,
			JSON.stringify(body),
			 {headers: this.headers}
			 )
		.map(this.checkForError)
		.catch(err => Observable.throw(err))
		.map(this.getJson);
	}

	delete(path: string): Observable<any>{
		return this.http.delete(`${this.api_url}${path}`, {headers: this.headers})
		.map(this.checkForError)
		.catch(err => Observable.throw(err))
		.map(this.getJson);
	}
}