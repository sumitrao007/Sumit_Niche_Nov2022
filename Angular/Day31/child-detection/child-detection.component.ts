import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-detection',
  templateUrl: './child-detection.component.html',
  styleUrls: ['./child-detection.component.css']
})
export class ChildDetectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getChild(){
    console.log("------------- Child Component ---------");
  }

}
