import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-countries.interfaces";

export class CountryMapper{

  static mapRESTCountrytemToCountry( CountrieItem : RESTCountry):Country{
    return{
      cca2 : CountrieItem.cca2,
      flag : CountrieItem.flag,
      flagSVG : CountrieItem.flags.svg,
      name : CountrieItem.translations["spa"].common ?? 'No spanish name',
      capital : CountrieItem.capital[0],
      population : CountrieItem.population
    }
  }

  static mapRESTCountryItemToCountryArray(CountrieItem : RESTCountry[]):Country[]{
    return CountrieItem.map(this.mapRESTCountrytemToCountry)
  }

}
