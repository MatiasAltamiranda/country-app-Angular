import {  Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-table-list',
  imports: [DecimalPipe],
  templateUrl: './country-table-list.component.html',
})
export class CountryTableListComponent {

  countries= input.required<Country[]>()

 }
