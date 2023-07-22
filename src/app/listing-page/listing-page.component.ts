import { Component } from '@angular/core';
import { Listing } from '../types';
import { fakeList } from '../fake-date';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent {

  Listing: Listing[] = fakeList;

  constructor() {
    this.Listing = fakeList;
   }



}
