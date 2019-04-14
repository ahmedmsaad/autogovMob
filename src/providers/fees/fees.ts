import { Injectable } from '@angular/core';

/*
  Generated class for the FeesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FeesProvider {

  Fees:any=[];

  constructor() {
    
  }
  load(){
    this.Fees=[{name: "Fees1", value:"55"},
    {name: "Fees2", value:"555"}];
  }
  addItem(){
    

  }
  editItem(){

  }
  getItem(id){
    
  }

}
