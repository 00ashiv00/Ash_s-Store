import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state)=> {
  let access=localStorage.getItem('session');
    if(access==='admin'){
    return true;
    }
  inject(Router).navigate(['']);
  return false;

};
