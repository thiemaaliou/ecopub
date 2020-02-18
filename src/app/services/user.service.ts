import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../shared/models/product';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(credentials){
    return this.httpClient.post(environment.apiUrl+'auth/login', credentials).pipe(response => response);
  }

  getLocationReverse(lat, lng){
        return new Promise(resolve => {
           this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key='+environment.apiGoogleKey)
             .subscribe(data => {
               resolve(data);
        });
      //  return this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key='+environment.apiGoogleKey);
    });
  }
  saveProduct(product: Product){
    return this.httpClient.post(environment.apiUrl+'product/add', product).pipe(response => response);
  }
}
