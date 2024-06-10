import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (
  route:ActivatedRouteSnapshot, 
  state:RouterStateSnapshot) => {
    const router =inject(Router);
    const token =localStorage.getItem('token');
    if (token){
      return true;
    }else{
      router.navigate(['']);
      return false;
    }
  
};
