import {Component , Input, EventEmitter, Output} from '@angular/core';
import { EmitterService, StoresService } from '../../../../services/index';//, 
import {BaCard} from '../../../../theme/components';
import {Observable} from 'rxjs/Rx';
import {StoresMap} from './storesMapDetail/index';

@Component({
  selector: 'store-detail',
  directives: [StoresMap, BaCard],
  template: require('./storeDetail.html'),
  styles: [require('./storeDetail.scss')],
  providers: [EmitterService] ,
  //inputs : ['store'],
})
export class StoreDetail {

	@Input() store : any;
	@Output() id_Store : string;
	@Output() changes: EventEmitter<any> = new EventEmitter();

	detailStore = [];
	editing = false;


  constructor(private _storeService : StoresService) {}

 selectStore(id : string){
//emit the id of the store
    let commentOperation:Observable<string>;

    this._storeService.getStoreSearch("_id="+ id).subscribe(
      store =>{

          this.detailStore = store.data;
          this.id_Store= id;
          this.editing= true;
           console.log(this.id_Store);
  //emit the detail of the store to the map component          
        EmitterService.get(id).emit( this.detailStore );
        this.changes.next(this.editing);

 // console.info("STORE DETAIL:"+JSON.stringify(this.detailStore));
      },(err) => { console.log(err); });
   
  }

}
