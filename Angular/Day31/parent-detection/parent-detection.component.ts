import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-detection',
  templateUrl: './parent-detection.component.html',
  styleUrls: ['./parent-detection.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class ParentDetectionComponent implements OnInit {

  prod:any=[];

  constructor(private cd:ChangeDetectorRef) { 
      this.cd.detach();
  }


  ngOnInit(): void {

    // this.prod=['test1']

    setTimeout(()=>{
      this.prod=['test1','test2']
      // this.cd.markForCheck();
      this.cd.detectChanges();
    },2000)
  }

  getParent(){

    console.log("========== Parent Component ============");
    // this.prod=['test1','test2'];
  }

}
