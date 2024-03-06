import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../model/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private api : string = 'http://localhost:8080/api/regiones';

  constructor(private http:HttpClient) { }

  getRegionList():Observable<Region []>{
    return this.http.get<Region[]>(this.api);
  }
}
