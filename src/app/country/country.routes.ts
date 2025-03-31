import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLoyautComponent } from './layouts/countryLoyaut/countryLoyaut.component';


export const countryRoutes: Routes = [

{
  path: '',
  component : CountryLoyautComponent,
  children : [
    {
      path : 'by-capital',
      component : ByCapitalPageComponent
    },
    {
      path : '**',
      redirectTo : 'by-capital'
    }
  ]
},

/* {
  path : 'country'
}, */
/* {
  path : '**',
  redirectTo : ''
} */



];


export default countryRoutes;
