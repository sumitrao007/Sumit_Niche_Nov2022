
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../utility/person';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

    
   @Output() childStrEvent=new EventEmitter();
  strdata:string='Angular 12 module ';

  arrprod=[
    {
      name:"Samsung",
      price:25000,
      qty:1
    },
    {
      name:"Motorolla",
      price:30000,
      qty:1
    },
    {
      name:"iPhone",
      price:83000,
      qty:1
    },
    {
      name:"Oppo",
      price:35000,
      qty:1
    },
    {
      name:"Realme",
      price:20000,
      qty:1
    }
  ];

  @Output() ChildArrObjEvent=new EventEmitter();


  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  @Output() ChildJsonObjEvent=new EventEmitter();

  // personArrObj:Person[]=[];

  person:Person=<Person>{}

  @Output() PersonJsonEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.childStrEvent.emit(this.strdata);
    this.ChildArrObjEvent.emit(this.arrprod);
    this.ChildJsonObjEvent.emit(this.jsonObj);
  }

  onSubmit(fname:string,lname:string,sal:string){
   this.person.fname=fname;
   this.person.lname=lname;
   this.person.salary=+sal;
    this.PersonJsonEvent.emit(this.person);
  }

}
