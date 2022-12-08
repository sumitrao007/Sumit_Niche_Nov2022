import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  labelName:string="Email Id";
  htmlelement:any[]=
  [
    {
      labelname:'EmailId',
      placeholdename:'Enter the Email Id',
      type:'text'
    },
    {
      labelname:'Password',
      placeholdename:'Enter the Password',
      type:'password'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // onChange(email:any){
  //     console.log(email);
  // }

  onChange(i:any){
    let temp='element'+i
     let temp2= document.getElementById(temp);
     console.log(temp2)

}


}
