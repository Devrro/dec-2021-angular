import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users/users.component';
import {UserComponent} from './components/user/user/user.component';
import {PostsComponent} from './components/posts/posts/posts.component';
import {PostComponent} from './components/post/post/post.component';
import {CommentsComponent} from './components/comments/comments/comments.component';
import {CommentComponent} from './components/comment/comment/comment.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {HomePageComponent} from './components/home-page/home-page.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    HomePageComponent,
    UserDetailComponent,
    CommentDetailsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home-page', component: HomePageComponent},
      {
        path: 'user-page',
        component: UsersComponent,
        children: [
          {path: 'user-details/:id', component: UserDetailComponent}
        ]
      },
      {
        path: 'comments-page',
        component: CommentsComponent,
        children: [{path: 'comment-details/:id', component: CommentDetailsComponent}]
      },
      {
        path: 'posts-page',
        component: PostsComponent,
        children: [{path: 'post-details/:id', component: PostDetailsComponent}]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
