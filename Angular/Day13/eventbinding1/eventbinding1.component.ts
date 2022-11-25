import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {

  count:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
      if(this.count==0){
        console.log("Event occur!!!");
        this.count++;
      }
    
  }

  onImage(){
    console.log("image click occur!!!")
  }

  onDollerEvent(myevent:any){
    console.log(myevent);
    console.log(myevent.target.value);
  }

  onInput(myevent:any){
    console.log(myevent.target.value)
  }

  onSend(kuchbhi:any){
    console.log(kuchbhi)
    console.log(kuchbhi.value);
    kuchbhi.style.background='green';
    kuchbhi.style.color='white';
  }

  onSend1(_name:string){
    console.log(_name);
  }

}
