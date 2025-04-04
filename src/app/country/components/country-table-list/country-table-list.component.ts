import {  Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries.interfaces';

@Component({
  selector: 'country-table-list',
  imports: [],
  templateUrl: './country-table-list.component.html',
})
export class CountryTableListComponent {

  countries= input.required<RESTCountry[]>()

 }
