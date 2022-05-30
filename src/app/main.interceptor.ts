import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {AuthService} from "./services";
import {IToken} from "./interfaces";
import {Router} from "@angular/router";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  isRefreshing = false

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAuth = this.authService.isAuthorization()

    if (isAuth) {
      request = this.addToken(request, this.authService.getAccessToken())
    }
    return next.handle(request).pipe(

      catchError((res: HttpErrorResponse) => {
        if (res && res.error && res.status === 401) {
          return this.handle401Error(request, next)
        }
        return throwError(() => {
          new Error('Token is expired')
        })
      })
    ) as any;
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  }

  handle401Error(request: HttpRequest<any>, next: HttpHandler): any {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      return this.authService.refreshToken().pipe(
        switchMap((tokens: IToken) => {
          return next.handle(this.addToken(request, tokens.access))
        }),
        catchError(() => {
          this.isRefreshing = false
          this.authService.deleteToken();
          this.router.navigate(['login'])
          return throwError(() => new Error('token invalid or expired'))
        })
      )
    }
  }

  // getCars(request:HttpRequest<ICar[]>, token:string):HttpRequest<any>{
  //   return request.clone({
  //     setHeaders:{Authorization:`Bearer ${token}`}
  //   })
  // }

}
