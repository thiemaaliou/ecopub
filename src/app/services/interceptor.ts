import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  passpeello: any;
  constructor(){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     if (request.url.includes('auth')) {
        // request = request.clone({
        //     setHeaders: {
        //         //"Content-Type":  "application/json",
        //         'Access-Control-Allow-Origin': '*' ,
        //     }
        //   });
    }else{
      let token = localStorage.getItem('ecopub-token');
      request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
    }
    return next.handle(request);
  }

}
