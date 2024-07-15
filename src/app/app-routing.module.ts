import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent } from './item/item-details/item-details.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ItemListComponent } from './item/item-list/item-list.component';

const routes: Routes = [
    {
      path: '',
      component: ContactComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
    path: 'item/:id',
    component: ItemComponent,
    children: [
      {
        path: 'details',
        component: ItemDetailsComponent
      },
      {
        path: 'list',
        component: ItemListComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
