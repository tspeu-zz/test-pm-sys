import {Component, ElementRef, ViewChild ,OnInit, Input, OnChanges, EventEmitter, SimpleChange ,OnDestroy} from '@angular/core';
//import {BaCard} from '../../../../../theme/index';
import {GoogleMapsLoader} from './storesMap.loader';
//import { StoresService } from '../../../../services';
import { EmitterService, StoresService } from '../../../../../services/index';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'google-maps',
  pipes: [],
  providers: [EmitterService],
  directives: [],//BaCard
  styles: [require('./storesMap.scss')],
  template: require('./storesMap.html'),
})
export class StoresMap implements OnInit , OnChanges{

  //@ViewChild('map-stores') map : StoresMap;
  
  map: any;
  @Input() storeId: string;
  stores = [];
  @Input() editId: string;
 // @Input() center : {lt: number, lng:number};
  storeDetail : any =[];
  editing = false;
   
   el : any;//this._elementRef.nativeElement.querySelector('.google-maps');
   iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';  
   
   //store the object of the store
   storeNow : any =[];
   //store darta from the Observable emit from the storeDetail
   detailStore=[];

  constructor(private _elementRef:ElementRef, private storesService: StoresService) {}

  //Retrieves all stores from database before anything else is done
  ngOnInit(){
    this.el = this._elementRef.nativeElement.querySelector('.google-maps');
//search the store in the Stores db
    this.storesService.getStoreSearch("_id="+ this.storeId).subscribe(
    store =>{
      this.detailStore = store.data;
      this.storeNow.push(this.detailStore[0]);
    //TEST  console.info("STORENow:"+JSON.stringify(this.storeNow));
//change the valuo to show the map component
    if(this.editing) this.editing = !this.editing;
//initialized the map with the data
    this.afterViewInit(this.storeNow[0].lat, this.storeNow[0].lng, this.storeNow[0].name,this.storeNow[0].description);
    
    console.info(this.storeNow[0].lat, this.storeNow[0].lng);
    
   // console.info("MAP DETAIL:"+JSON.stringify(this.detailStore));
    
    },(err) => { console.log(err); });

  }

  //Displays map
  afterViewInit(arg1 : number, arg2 : number, arg3 : string, arg4 : string) :void {
    GoogleMapsLoader.load((google) => {
      this.map = new google.maps.Map(this.el, {
        center: new google.maps.LatLng(arg1,arg2 ),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(arg1, arg2),   //marker placed at stores lat/lng coordinates
      //icon: iconBase + 'info-i_maps.png',
      map: this.map,
      title: arg3
    });

    //What shows when you click the marker
    let infoWindow = new google.maps.InfoWindow({
          content: '<h3>' + arg3 + '</h3><p>' + arg4 + '</p>'
    });

    google.maps.event.addListener(marker, 'click', function() {
          infoWindow.open(this.map, marker);
    });

    var pos = {
      lat: arg1,
      lng: arg2
    };

    this.map.setCenter(pos);

    });
    
  }

/* ***Ok just work with double click in the detail store
Detect the changes wit the observable emited from the detail Store
when click in the store
*/
  ngOnChanges(changes:any) :void {
    // Listen to the 'list'emitted event so as populate the model
    EmitterService.get(this.storeId).subscribe((data) => {
    this.storeDetail = data;
    this.editing = true;

    this.afterViewInit(data[0].lat, data[0].lng, data[0].name, data[0].description );

  //test  console.log(`cambio: ${JSON.stringify(this.storeDetail)} |edit:  ${this.editing} |id:SUBCR: ${this.storeId}`);
        });
  }

   ngOnDestroy() {
    //subscription.unsubscribe();
    EmitterService.get(this.storeId).unsubscribe(); 
  }


}
