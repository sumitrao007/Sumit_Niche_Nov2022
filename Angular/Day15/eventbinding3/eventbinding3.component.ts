import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component implements OnInit {
result:number=0;
mydate1:any;
  constructor() { }

  ngOnInit(): void {
  }

  onSend(mydate:any){
    console.log(mydate)
  }

  onSend1(){
    console.log(this.mydate1)
  }

}
