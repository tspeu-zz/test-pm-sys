import {Injectable, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ObserverService{



 editing : boolean = false;

    public service_Ovserver(data :any) : Observable<any> {

 	return  new Observable(observer => {

		  setTimeout(() => {
		    observer.next(data);
		    console.log('this data : '+data);
		  }, 1000);
		  
		  setTimeout(() => {
		    observer.next(!this.editing);
		     console.log('editing: '+this.editing);
		  }, 2000);

		});
 	 
    }
		

}
/*
		  
setTimeout(() => {
observer.next(3);
}, 3000);

setTimeout(() => {
observer.next(4);
}, 4000);



    // Fetch all existing comments
     getComments() : Observable<Comment[]>{
         // ...using get request
         return this.http.get(this.commentsUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }


*/
