import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserDataService } from './user-data.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserDataService);
  const router = inject(Router);

  if (authService.getUserData()) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
