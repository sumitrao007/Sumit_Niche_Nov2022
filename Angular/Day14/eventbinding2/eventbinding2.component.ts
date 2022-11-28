import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {

  result:number=0;
  myname1:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onAddition(num1:any,num2:any){

    let n1=+num1;
    let n2=+num2;

      // this.result=num1+num2;      
      this.result=n1+n2;

  }

  onChange(){
    console.log("Change Event is occur...")
  }

  onChange1(myname:any){
    myname.style.background='green';
    myname.style.color='white';
    console.log("Data is  "+myname.value)
  }

  onkeyUp(){
    console.log("Key Up Event Occur")
  }

  onkeyDown(){
    console.log("Key Down Event Occur...")
  }

  onKeyEnter(){
    console.log("Key up Event Ocuur.. ")
  }

}
