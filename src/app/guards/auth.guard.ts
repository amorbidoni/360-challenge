import { inject } from '@angular/core';
import { Router} from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../services/auth.service';


export const authGuard = () => {
  const router = inject(Router);
  const service = inject(AuthService)
  return service.getIsAuthenticated().pipe(
    tap((isAuthenticated) => {
      return !isAuthenticated ? router.navigate(['/login']) : true
    }
  ))
}