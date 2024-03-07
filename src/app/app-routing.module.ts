import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewUserComponent} from "./components/view-user/view-user.component";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {UpdateUserComponent} from "./components/update-user/update-user.component";

const routes: Routes = [
  {path: '', component:ViewUserComponent},
  {path: 'add', component:AddUserComponent},
  {path: 'update/:idUsuario', component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
