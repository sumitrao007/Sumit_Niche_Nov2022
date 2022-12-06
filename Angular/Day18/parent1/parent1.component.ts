import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit,AfterViewInit {

  @ViewChild('mydiv') AccessDiv!:ElementRef;

  @ViewChild(Child3Component) ChildAccess!:Child3Component;

  constructor() { }
 

  ngOnInit(): void {
    console.log(this.AccessDiv);
  }

  ngAfterViewInit(): void {
    console.log(this.AccessDiv);
    this.AccessDiv.nativeElement.className='highlight';
  }

  onPropertyAccess(){
    this.ChildAccess.username='Sumit Raokhande';
  }

  onMethodAccess(){
    this.ChildAccess.onAlert();
  }

}
