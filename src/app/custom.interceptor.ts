import { HttpInterceptorFn, HttpRequest,HttpHandler,HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
export const customInterceptor: HttpInterceptor =  {
  intercept: (req: HttpRequest<any>, next: HttpHandler): Observable<any> =>{
  const token = localStorage.getItem('token');
  const newCloneRequest = req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  })
  return next.handle(newCloneRequest);
}
};
