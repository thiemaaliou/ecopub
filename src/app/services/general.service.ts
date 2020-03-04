import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Client } from '../shared/models/client';
import { Publicity } from '../shared/models/publicity';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private httpClient: HttpClient) { }

   getAllClients(){
      return this.httpClient.post(environment.apiUrl+'clients/all', {}).pipe(response => response);
   }

   getAllPublicities(){
      return this.httpClient.post(environment.apiUrl+'publicities/all', {}).pipe(response => response);
   }

   getClientDetails(id){
     return this.httpClient.post(environment.apiUrl+'clients/'+id, {}).pipe(response => response);
   }

   getClientType(){
     return this.httpClient.get(environment.apiUrl+'client/type/all').pipe(response => response);
   }

   saveClient(client: Client){
      return this.httpClient.post(environment.apiUrl+'clients/add', client).pipe(response => response);
   }

   savePublcity(publicity: Publicity){
      return this.httpClient.post(environment.apiUrl+'publicity/add', publicity).pipe(response => response);
   }

   getSelectList(item){
     return this.httpClient.get(environment.apiUrl+''+item.url).pipe(response => response);
   }
}
