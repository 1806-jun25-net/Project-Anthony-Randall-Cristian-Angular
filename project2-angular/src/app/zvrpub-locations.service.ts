import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Location } from './models/Location';

@Injectable({
  providedIn: 'root'
})
export class ZVRPubLocationsService {
  private locationUrl = 'https://project2zvrapi.azurewebsites.net/api/locations'

  getLocations(): Observable<Location[]>{
    return this.httpClient.get<Location[]>(this.locationUrl)
  }

  constructor(private httpClient: HttpClient) { }
}
