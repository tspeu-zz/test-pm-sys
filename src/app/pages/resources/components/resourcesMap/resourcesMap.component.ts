import {Component, ElementRef} from '@angular/core';
import {BaCard} from '../../../../theme/components';
import {GoogleMapsLoader} from './resourcesMap.loader';
import { ResourcesService } from '../../../../services';

@Component({
  selector: 'google-maps',
  pipes: [],
  providers: [],
  directives: [BaCard],
  styles: [require('./resourcesMap.scss')],
  template: require('./resourcesMap.html'),
})
export class ResourcesMap {

  resources = [];

  constructor(private _elementRef:ElementRef, private resourcesService: ResourcesService) {

  }

  //Retrieves all stores from database before anything else is done
  ngOnInit(){
    this.resourcesService.getResources().
    subscribe((resources)=>
    {
      this.resources = resources.data;
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
        center: new google.maps.LatLng(83.277778, -9.011765),
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      //Placing a marker for each resource on the map
      for(let m of this.resources){
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(m.lat, m.lng),  //marker placed at resources lat/lng coordinates
            //icon: iconBase + 'info-i_maps.png',
            map: map
          });

        //What shows when you click the marker
        let infoWindow = new google.maps.InfoWindow({
          content: '<h3>'+m.name+'</h3><p>'+m.description+'</p><p>Phone No: '+m.phone+'</p>'
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
  ngOnDestroy(){
    
  }
}