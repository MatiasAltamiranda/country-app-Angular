import { Component } from '@angular/core';
import { CountryTableListComponent } from "../../components/country-table-list/country-table-list.component";

@Component({
  selector: 'app-by-region-page',
  imports: [CountryTableListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent { }
