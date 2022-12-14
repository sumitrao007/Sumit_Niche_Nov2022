import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];

  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.GetPost();
  }

  GetPost(){
      this.service.getPost()
      .subscribe((response:any)=>{
        console.log(response)
        this.posts=response;
      })
  }

  onSend(mytitle:string,mybody:string){
      let obj={
        title:mytitle,
        body:mybody
      }

      this.service.SendData(obj)
      .subscribe((response)=>{
        console.log(response)
      })

  }


}
