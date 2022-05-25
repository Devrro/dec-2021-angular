import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsComponent} from './comments/comments.component';
import {HttpClientModule} from "@angular/common/http";
import {CommentsService} from "./services/comments.service";
import {CommentComponent} from './comment/comment.component';
import {CommentsResolver} from "./services/comments.resolver";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule,
  ],
  providers: [CommentsService,CommentsResolver]
})
export class CommentsModule {
}
