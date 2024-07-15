import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailsComponent } from './item/item-details/item-details.component';
import { ItemComponent } from './item/item.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ItemListComponent } from './item/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailsComponent,
    ItemComponent,
    ContactComponent,
    AboutComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
