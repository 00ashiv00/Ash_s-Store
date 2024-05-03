
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userAuthGuard: CanActivateFn = (route, state) => {
  let access=localStorage.getItem('type');
    if(access==='user'){
    return true;
    }

  inject(Router).navigate(['']);
  return false;
};
