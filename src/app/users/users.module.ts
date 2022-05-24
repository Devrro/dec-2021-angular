import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users-components/users/users.component';
import {UserComponent} from './users-components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./users-services/users.service";
import { UserDetailsComponent } from './users-components/user-details/user-details.component';
import {UsersResolver} from "./users-services/resolvers/users.resolver";
import {UserResolver} from "./users-services/resolvers/user.resolver";
import { UserPostsComponent } from './users-components/user-posts/user-posts.component';
import { UserPostComponent } from './users-components/user-post/user-post.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserPostsComponent,
    UserPostComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService, UsersResolver,UserResolver]
})
export class UsersModule {
}
