import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { of } from 'rxjs';
import { Country } from '../common/country';
import { HttpClient } from '@angular/common/http';
import { State } from '../common/state';

@Injectable({
  providedIn: 'root'
})
export class Luv2ShopFormService {

  private countriesUrl = 'http://localhost:8080/api/countries';
  private statesUrl = 'http://localhost:8080/api/states';

  constructor(private httpClient: HttpClient) { }

  getCreditCardMonths(startMonth: number): Observable<number[]> {
    let data: number[] = [];

    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }
    return of(data);
  }

  getCreditCardYears(): Observable<number[]> {
    let data: number[] = [];

    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;

    for (let theYear = startYear; theYear <= endYear; theYear++) {
      data.push(theYear);
    }
    return of(data);
  }

getCountries(): Observable<Country[]> {
  return this.httpClient.get<getResponseCountries>(this.countriesUrl).pipe(
    map(response => response._embedded.countries)
  );
}


  getStates(theCountryCode: number): Observable<State[]> {
    const searchStateUrl = `${this.statesUrl}/search/findByCountryCode?code=${theCountryCode}`;
    return this.httpClient.get<getResponseStates>(searchStateUrl).pipe(
      map(response => response._embedded.states)
    );
  }
}


interface getResponseCountries {
  _embedded: {
    countries: Country[]; 
  }
}

interface getResponseStates {
  _embedded: {
    states: State[];
  }
}