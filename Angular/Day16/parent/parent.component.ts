import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string='Hopes so u r enjoying Angular 12 Module ';

  jsonData={
    id:9,
    fname:'Sumit',
    role:'DevOps'
  }

  msgdata:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onSend(data:string){
    this.msgdata=data;
  }

}
