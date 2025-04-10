import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';




@Component({
  selector: 'app-country-page',
  imports: [],
  templateUrl: './country-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPageComponent {

  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryServices = inject(CountryService)

  countryResourse = rxResource({
    request : ()=>({code : this.countryCode}),
    loader : ({request}) =>{
      return this.countryServices.searchByCountryByAlphaCode(request.code)
    }
  })
}
