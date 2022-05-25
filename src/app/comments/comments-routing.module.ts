import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentsComponent} from "./comments/comments.component";
import {CommentsResolver} from "./services/comments.resolver";

const routes: Routes = [
  {path:'',resolve:{data:CommentsResolver}, component:CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsRoutingModule { }
