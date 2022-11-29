import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=["Angular 12","react Js",'Vue js','Embber js','Flutter','AWS'];

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
