import {Component, inject, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryTableListComponent } from "../../components/country-table-list/country-table-list.component";
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-countries.interfaces';

@Component({
  selector: 'by-capital-page',
  imports: [CountrySearchInputComponent, CountryTableListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

    countryService = inject(CountryService);

    isLoading = signal(false);
    isError = signal<string|null> (null);
    countris = signal <RESTCountry[]>([]);


    onSearch(value:string){

      if(this.isLoading()) return;

      this.isLoading.set(true);
      this.isError.set(null);

        this.countryService.searchByCapital(value).subscribe((data)=>{
          this.isLoading.set(false);
          this.countris.set(data);
        } )
    }

}
