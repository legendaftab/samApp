import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant } from '../constant/constant';
import { instaList } from '../interface/alldata';

@Injectable({
  providedIn: 'root'
})
export class HomeSService {

  constructor(private http:HttpClient) { }

  getData():Observable<instaList[]>{
  return this.http.get<instaList[]>(constant.apiEndPoint.getData);
  }
}
