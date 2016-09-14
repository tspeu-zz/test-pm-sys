import {Injectable, EventEmitter} from '@angular/core';


@Injectable()
export class EmitterService {
    // Event store
   private static _emitters: { [ID: string]: EventEmitter<any> } = {};
    // Set a new event in the store with a given ID
    // as key
    static get(ID: string): EventEmitter<any> {
        if (!this._emitters[ID]) 
            this._emitters[ID] = new EventEmitter();
        return this._emitters[ID];
    }


}

    
/*

    

    **/
/*
Hint!!!!!!
Don't use EventEmitter for anything else but @Output()s. 
Angular doesn't guarantee that EventEmitter will keep extending 
Subject or even work similar to a Subject in the future.

*/