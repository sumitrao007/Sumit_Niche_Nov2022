import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
