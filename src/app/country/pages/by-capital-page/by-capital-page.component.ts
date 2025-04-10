import {Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryTableListComponent } from "../../components/country-table-list/country-table-list.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'by-capital-page',
  imports: [CountrySearchInputComponent, CountryTableListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

    countryService = inject(CountryService);

/*     isLoading = signal(false);
    isError = signal<string|null> (null);
    countris = signal <Country[]>([]);


    onSearch(value:string){

      if(this.isLoading()) return;

      this.isLoading.set(true);
      this.isError.set(null);

        this.countryService.searchByCapital(value).subscribe(
          {
            next:(data) => {
                this.isLoading.set(false);
                this.countris.set(data);
            },
            error:(err)=> {
                this.isLoading.set(false);
                this.countris.set([]);
                this.isError.set(err)
            },
          }
        )
    } */



  /*   countryResource= resource({
      request: ()=>({query : this.query()}),
      loader : async({request})=>{
        if (!request.query) return [];
        return await firstValueFrom(
          this.countryService.searchByCapital(request.query)
        )
      }
    }) */

    query = signal('');

    countryResource=  rxResource({
      request: ()=>({query : this.query()}),
      loader : ({request})=>{
       if (!request.query) return of([]);
        return this.countryService.searchByCapital(request.query)

      }
    })




}
