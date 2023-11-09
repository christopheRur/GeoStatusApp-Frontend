import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { geoConstants } from '../geoConstants';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getGeoStatus():Observable<any> {

    return this.http.get<any>(`${this.apiServiceUrl}/geo/status`);
  }
}
