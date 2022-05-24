import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {HttpClientModule} from "@angular/common/http";
import {PostsService} from "./post-services/posts.service";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
  ],
  providers:[
    PostsService,
  ]
})
export class PostsModule {
}
