import { Component } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryTableListComponent } from "../../components/country-table-list/country-table-list.component";

@Component({
  selector: 'app-by-country-page',
  imports: [CountrySearchInputComponent, CountryTableListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent { }
