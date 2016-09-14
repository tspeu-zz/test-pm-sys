import {Component, ViewEncapsulation} from '@angular/core';
import { FORM_DIRECTIVES, FORM_PROVIDERS, NgForm } from '@angular/forms'
import { BaCard } from '../../../../theme/components';
import { StoresService, NamesService } from '../../../../services'

@Component({
  selector: 'new-resource',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, NgForm, FORM_DIRECTIVES],//, DropdownInputs, GroupInputsStandardInputs, ValidationInputs, CheckboxInputs, Rating
  template: require('./newStore.html'),
  styles: [require('./input-form.scss')],
  providers: []
})

export class newStore {

  constructor(private _storesService : StoresService, private _namesService : NamesService) {
  }

  newStore = {
  	name: "",
  	address: "",
    store_id: "",
  	phone: "",
  	description: "",
  	lat: 0,
  	lng: 0
  }

  storeCountry = [];

  ngOnInit(){
  	this._namesService.getNames()
  	.subscribe((names) =>
  		this.storeCountry = names.data[0].store
  	);
  }

  onSubmit(){
    if(this.newStore.name==""){
      alert("Please enter a name.");
    }
    else{
      this._storesService.createStore(this.newStore)
      .subscribe(); 
      alert("New Resource added!");
    }
    console.log(this.newStore);
  }
}