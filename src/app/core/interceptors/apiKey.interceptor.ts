
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MD5 } from 'crypto-es/lib/md5';

import { environment } from 'src/environments/environment';


@Injectable()
export class APIKeyInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apikey = environment.publicKey;
    const privateKey = environment.privateKey;
    const ts = new Date().getTime().toString();
    const hash = MD5(`${ts}${privateKey}${apikey}`);

    const request = req.clone({
      setParams: {
        apikey,
        ts,
        hash
      }
    });

    return next.handle(request);
  }
}
