import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interfaces';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import type { Country } from '../interfaces/country.interface';


const apiUrl = 'https://restcountries.com/v3.1'



@Injectable({
  providedIn: 'root'
})
export class CountryService {


  private http = inject(HttpClient);

  searchByCapital (query:string): Observable<Country[]>{

      query = query.toLocaleLowerCase();

      return this.http.get<RESTCountry[]>(`${apiUrl}/capital/${query}`)
      .pipe(
        map(resp=> CountryMapper.mapRESTCountryItemToCountryArray(resp) ),
        catchError((error)=>{
            console.log("Error consulta", error)
            return throwError(()=> new Error(`No se encontro un país con la capital ingresada: ${query}`))
        })
      )

  }

  searchByCountry(query:string): Observable<Country[]>{
    query = query.toLocaleLowerCase();

    return this.http.get<RESTCountry[]>(`${apiUrl}/name/${query}`)
    .pipe(
      map(resp=> CountryMapper.mapRESTCountryItemToCountryArray(resp) ),
      delay(3000),
      catchError((error)=>{
          console.log("Error consulta", error)
          return throwError(()=> new Error(`No se encontro un país con el nombre: ${query}`))
      })
    )
  }

  searchByCountryByAlphaCode(code:string){

    return this.http.get<RESTCountry[]>(`${apiUrl}/alpha/${code}`)
    .pipe(
      map((resp)=> CountryMapper.mapRESTCountryItemToCountryArray(resp) ),
      map((countries) => countries.at(0)),
      catchError((error)=>{
          console.log("Error consulta", error)
          return throwError(()=> new Error(`No se encontro un país con ese codigo: ${code}`))
      })
    )
  }



}
