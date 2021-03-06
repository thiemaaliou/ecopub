import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";

@Injectable()
export class Interceptor implements HttpInterceptor {
  passpeello: any;
  constructor(){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     if (request.url.includes('auth') || request.url.includes('maps.googleapis.com')) {
        request = request.clone({
            setHeaders: {
                'Access-Control-Allow-Origin': '*' ,
            }
          });
    }else{
      let token = localStorage.getItem('ecopub-token');
      request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
    }
    // return next.handle(request);
    return next.handle(request).pipe(
      finalize(() => {})
    );
  }

}
