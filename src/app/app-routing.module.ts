import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PreFetchingResolver } from './pre-fetching.resolver';
import { ResolveGetComponent } from './resolve-get/resolve-get.component';

const routes: Routes = [
  {
    path: 'resolve',
    component: ResolveGetComponent,
    resolve: [PreFetchingResolver]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
