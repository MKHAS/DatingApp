import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser: User;

    this.accountService.currentUser$.pipe(take(1)).subscribe(user => currentUser = user);

    if (currentUser) {
      request = request.clone({
        setHeaders: {
          // attach our token for every request when we're
          // logged in and send that up with our request
          
          Authorization: `Bearer ${currentUser.token}`
        }
      })
    }
// and because we've cloned that request here when we return from this, it's that request
// if we're logged in that's gonna receive our authorization header and send this up with our request
    return next.handle(request);
  }
}
