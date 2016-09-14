import {Component, ViewEncapsulation, OnInit, Input,Output, OnChanges, SimpleChange, EventEmitter } from '@angular/core';
import {StoresService, NamesService} from '../../../../services/index';
import {StoreDetail} from '../storeDetail/index';
import {BaCard} from '../../../../theme/components';
import {StoresMap} from '../storesMap/index';
import {Angular2Carousel} from '../../../slide/carrusel';
//import {LeafletMaps} from '../leafletMaps/index';
//import {BaPictureUploader} from '../../../../theme/components';

@Component({
  selector: 'store-select',
  encapsulation: ViewEncapsulation.None,
  directives: [StoreDetail, BaCard, StoresMap, Angular2Carousel],//,LeafletMaps
   template: require('./storeSelect.html'),
  styles: [require('./storeSelect.scss')],
  providers: [] 
})

export class StoreSelect implements OnInit, OnChanges{
//inputs : ['storeId']
 @Input() idStores : any;
 @Output() changes: EventEmitter<any> = new EventEmitter();

  stores : any = [];//all stores of stores dB
  names : any = [];//all names of dB
  
  storesNow =[]; //array of Stores of names dB
  storeId : string; //id of the store of names dB |->model in  the DOM
  searchStore :any = []; //result of search stores on storedB with storeId pass to the detail Comp

  constructor(private _storeService : StoresService, private _namesService : NamesService) {}

  ngOnInit(){
    this._namesService.getNames()
   .subscribe((names) =>{ 
     this.names = names.data[0]
//TEST   console.info('NAMES:'+ JSON.stringify(this.names));
     this.storesNow.push( this.names.store);   
//TEST  console.info('STORESiD:'+ JSON.stringify(this.storesNow));
   })
//All stores from store dB
    this._storeService.getStores().subscribe((data) =>{
      this.stores = data;
//TEST  console.info('STORES:'+ JSON.stringify(this.stores));
    });
  }

   ngOnChanges(store : any) {
     console.log("emit"+store);
    //this.changes.emit(store);
    this.changes.next(store);
  }

//Detect change on the storeId in the DOM
  onChangeObj(newObj) {
    console.log("est"+newObj);
    this.storeId =newObj;
      console.log(` storeId: ${this.storeId}` );
  
  }

 //search Stores with actual store Id //store_id=1
  storeName : string;
  searchStoreId(id : string | number){

    this._storeService.getStoreSearch("store_id="+id).subscribe(
      store =>{
        let storesNow =[];
        storesNow.unshift(store.data);
        this.searchStore = storesNow[0];
    //  console.info("search STORES:"+JSON.stringify(this.searchStore));
      },(err) => { console.log(err); });
  }


}