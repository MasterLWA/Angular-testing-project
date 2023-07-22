import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { LisitingDetailsPageComponent } from './lisiting-details-page/lisiting-details-page.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewLisitingComponent } from './new-lisiting/new-lisiting.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { WrongComponent } from './wrong/wrong.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingPageComponent,
    LisitingDetailsPageComponent,
    MyListingPageComponent,
    ContactsComponent,
    NewLisitingComponent,
    EditListingComponent,
    WrongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
