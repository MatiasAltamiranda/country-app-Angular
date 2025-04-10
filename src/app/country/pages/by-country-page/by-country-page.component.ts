import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryTableListComponent } from "../../components/country-table-list/country-table-list.component";
import { firstValueFrom, of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-country-page',
  imports: [CountrySearchInputComponent, CountryTableListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  countryService = inject(CountryService);
  query = signal('');

 /*  countryResource= resource({
    request: ()=>({query : this.query()}),
    loader : async({request})=>{
      if (!request.query) return [];
      return await firstValueFrom( // firstValueFrom transforma el valor de un observable en una promesa
        this.countryService.searchByCountry(request.query))
    }
  }) */


    countryResource= rxResource({
      request: ()=>({query : this.query()}),
      loader : ({request})=>{
        if (!request.query) return of([]);
        return this.countryService.searchByCountry(request.query)
      }
    })

 }
