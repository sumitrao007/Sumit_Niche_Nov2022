import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { DetailuserComponent } from './detailuser/detailuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:"",component:UserComponent
  },
  {
    path:"update",component:UpdateuserComponent
  },
  {
    path:"detail",component:DetailuserComponent
  },
  {
    path:"delete",component:DeleteuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
