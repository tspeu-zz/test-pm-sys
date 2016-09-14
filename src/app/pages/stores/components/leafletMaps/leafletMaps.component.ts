import {Component,  ElementRef, Input, OnInit, AfterViewInit } from '@angular/core';
import {BaCard} from '../../../../theme/components';
import { StoresService } from '../../../../services';

import './leafletMaps.loader';

@Component({
  selector: 'leaflet-maps',
  pipes: [],
  providers: [StoresService],
 // encapsulation: ViewEncapsulation.None,ViewEncapsulation,
  styles: [require('./leafletMaps.scss')],
  template: require('./leafletMaps.html'),
  directives: [BaCard],
})
export class LeafletMaps implements OnInit, AfterViewInit {

  @Input() latlong ={};

  stores : Array<any> =[];
  map : any;
  markers : any =[];
  
  constructor(private _elementRef:ElementRef, private storesService: StoresService) {}
  
  ngOnInit(){

  }

  ngAfterViewInit() {
    this.storesService.getStores()
        .subscribe((stores)=>
        {
          this.stores= stores.data;
         //this.ngAfterViewInit();
         console.log("MAP STORES"+JSON.stringify(this.stores));
        });

    let el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

    L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet';
    this.map = L.map(el).setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
/*
    L.marker([51.5, -0.09]).addTo(this.map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
*/ 

    for(let m of this.stores){
        L.marker([m.lat, m.lng]).addTo(this.map)
      .bindPopup(m.description)
     .openPopup();
    }
   /* let marker = new google.maps.Marker({
        position: new google.maps.LatLng(m.lat, m.lng),   //marker placed at stores lat/lng coordinates
        //icon: iconBase + 'info-i_maps.png',
        map: map,
        title: m.content
      });
*/
    
  }
}