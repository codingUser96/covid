import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(
    private http: HttpClient,
  ) { }

  covidCount() {
    const url = 'https://api.covid19india.org/v2/state_district_wise.json';
    return this.http.get<any>(url)
    .pipe(map(data => {
      return data;
    }));

  }
}
