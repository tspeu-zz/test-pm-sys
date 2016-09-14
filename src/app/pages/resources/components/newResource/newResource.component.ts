import {Component, ViewEncapsulation} from '@angular/core';
import { FORM_DIRECTIVES, FORM_PROVIDERS, NgForm } from '@angular/forms'
import { BaCard } from '../../../../theme/components';
import { ResourcesService, NamesService } from '../../../../services'

@Component({
  selector: 'new-resource',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, NgForm, FORM_DIRECTIVES],//, DropdownInputs, GroupInputsStandardInputs, ValidationInputs, CheckboxInputs, Rating
  template: require('./newResource.html'),
  styles: [require('./input-form.scss')],
  providers: []
})

export class newResource {

  constructor(private _resourcesService : ResourcesService, private _namesService : NamesService) {
  }

  newResource = {
  	name: "",
  	address: "",
  	phone: "",
  	type: 0,
  	country: "",
  	description: "",
  	rating: 5,
  	lat: 0,
  	lng: 0
  }

  types = [];

  ngOnInit(){
  	this._namesService.getNames()
  	.subscribe((names) =>
  		this.types = names.data[0].type
  	);
  }

  onSubmit(){
    if(this.newResource.name==""){
      alert("Please enter a name.");
    }
    else{
      this._resourcesService.createResource(this.newResource)
      .subscribe(); 
      alert("New Resource added!");
    }
    console.log(this.newResource);
  }
}