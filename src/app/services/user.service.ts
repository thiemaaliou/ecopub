import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(credentials){
    return this.httpClient.post(environment.apiUrl+'auth/login', credentials).pipe(response => response);
  }
}
