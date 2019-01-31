import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResultModel } from '../modele/LoginResultModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginResultModel> {
    return this.http.post<LoginResultModel>('https://reqres.in/api/login', {
      username: username,
      password: password
    });
  }


}
