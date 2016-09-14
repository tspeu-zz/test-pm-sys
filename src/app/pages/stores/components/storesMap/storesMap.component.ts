import {Component, ElementRef, ViewChild ,OnInit, Input, OnChanges, EventEmitter, SimpleChange } from '@angular/core';
import {BaCard} from '../../../../theme/components';
import {GoogleMapsLoader} from './storesMap.loader';
//import { StoresService } from '../../../../services';
import { StoresService } from '../../../../services/index';



@Component({
  selector: 'google-maps',
  pipes: [],
  providers: [],
  directives: [BaCard],
  styles: [require('./storesMap.scss')],
  template: require('./storesMap.html'),
})
export class StoresMap {

  //@ViewChild('map-stores') map : StoresMap;
  stores = [];

  constructor(private _elementRef:ElementRef, private storesService: StoresService) {}

  //Retrieves all stores from database before anything else is done
  ngOnInit(){
    this.storesService.getStores()
    .subscribe((stores)=>
    {
      this.stores = stores.data;
      this.afterViewInit();
    });
    
  }

  //Displays map
  afterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.google-maps');
    let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    // TODO: do not load this each time as we already have the library after first attempt
    let map: any;


    GoogleMapsLoader.load((google) => {


      map = new google.maps.Map(el, {
        center: new google.maps.LatLng(83.277778, -9.011765),  //Random location, is updated to the users location if permission is granted
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      //Placing a marker for each store on the map
      for(let m of this.stores){
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(m.lat, m.lng),   //marker placed at stores lat/lng coordinates
            //icon: iconBase + 'info-i_maps.png',
            map: map,
            title: m.content
          });

        //What shows when you click the marker
        let infoWindow = new google.maps.InfoWindow({
          content: '<h3>'+m.name+'</h3><p>'+m.description+'</p>'
        });
        google.maps.event.addListener(marker, 'click', function(){
          infoWindow.open(map, marker);
        })
      }
      //Change where the map is centred if we have the permission to get the users location
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          map.setCenter(pos);
        })
      }

    });
  }
}
