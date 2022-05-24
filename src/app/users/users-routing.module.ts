import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users-components/users/users.component";
import {UserDetailsComponent} from "./users-components/user-details/user-details.component";
import {UsersResolver} from "./users-services/resolvers/users.resolver";
import {UserResolver} from "./users-services/resolvers/user.resolver";
import {UserPostsComponent} from "./users-components/user-posts/user-posts.component";

const routes: Routes = [
  {
    path: '', component: UsersComponent,resolve:{usersData:UsersResolver}, children: [
      {path: 'user/:id/:nickname',resolve:{userData:UserResolver},component:UserDetailsComponent},
      {path: 'user/:id/posts/:nickname',component:UserPostsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
