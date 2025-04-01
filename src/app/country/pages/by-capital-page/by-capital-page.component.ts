import {Component } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryTableListComponent } from "../../components/country-table-list/country-table-list.component";

@Component({
  selector: 'by-capital-page',
  imports: [CountrySearchInputComponent, CountryTableListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {



}
