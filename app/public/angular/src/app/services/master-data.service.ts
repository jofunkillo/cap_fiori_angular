import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {OData} from '../models/OData';
import { isDevMode } from '@angular/core';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {
  baseUrl: string;
  
  constructor(private http:HttpClient) {
    if (isDevMode()) {
      this.baseUrl = '/publicServices/';
    }
    else {
      this.baseUrl = '/publicServices/';
    }
    //}
    //else {
    //  this.baseUrl = 'https://e7098fe6trial-dev-cockpit-srv.cfapps.eu10.hana.ondemand.com/extservices/';
    // }
   }


  getAccounts():Observable<OData> {
    var response = this.http.get<OData>(this.baseUrl+"Account?$format=json");
    return response;
  }
  getCenters():Observable<OData> {
    var response = this.http.get<OData>(this.baseUrl+"Center?$format=json");
    return response;
  }
}

