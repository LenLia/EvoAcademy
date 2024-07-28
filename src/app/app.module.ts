import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { DataService } from './data.service';
import { AccessRoleGuard } from './access-role.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    PostsListComponent,
    PostsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, AccessRoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
