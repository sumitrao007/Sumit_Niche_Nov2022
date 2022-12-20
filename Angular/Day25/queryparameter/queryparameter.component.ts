import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyQueryParam } from '../utility/queryinterface';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  myjson=<MyQueryParam>{};
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataFromUrl();
  }
  getDataFromUrl(){
      this.route.queryParamMap
      .subscribe((param:any)=>{
          this.myjson.id=+param.get("id");
          this.myjson.fname=param.get("fname");
          this.myjson.role=param.get("role");
      })
  }

}
