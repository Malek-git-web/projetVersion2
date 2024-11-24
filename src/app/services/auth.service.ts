import {  HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Admin } from '../model/admin';
const URL="http://localhost:3000/admin";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http:HttpClient=inject(HttpClient)
 
  getCoords():Observable<Admin>{
    return this.http.get<Admin>(URL);
}
  patchCoords(mdp:string):Observable<Admin>{
    return this.http.patch<Admin>(URL,mdp);
  }
  login(log1:string,pwd1:string,log2:string,pwd2:string){
let connected= log1==log2 && pwd1 ==log2;
if (connected)
  localStorage.setItem("state", "connected");
  else
  localStorage.setItem("state", "disconnected");
  return of(connected);
  }
  logout() {
    localStorage.setItem('state', 'disconnected')
    }
  
  constructor() { }
}
