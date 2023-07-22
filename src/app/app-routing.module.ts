import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { LisitingDetailsPageComponent } from './lisiting-details-page/lisiting-details-page.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewLisitingComponent } from './new-lisiting/new-lisiting.component'; 
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { WrongComponent } from './wrong/wrong.component';

const routes: Routes = [
  { path: '', redirectTo: '/listing', pathMatch: 'full' },
  { path: 'listing', component: ListingPageComponent},
  { path: 'listing/:id', component: LisitingDetailsPageComponent},
  { path: 'my-listing', component: MyListingPageComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'new-listing', component: NewLisitingComponent },
  { path: 'edit-listing/:id', component: EditListingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
