import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AccessRoleGuard } from './access-role.guard';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'posts',
    component: PostsListComponent,
    canActivateChild: [AccessRoleGuard],
    children: [
      {
        path: ':id',
        component: PostsDetailComponent,
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
