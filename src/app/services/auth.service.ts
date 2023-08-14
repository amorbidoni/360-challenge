import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  isAuthenticated = false;
  getIsAuthenticated(){
    return of(this.isAuthenticated).pipe(
      tap((v) => console.log(v) )
    ) 
  }
  login(username: string, password: string): boolean {
    
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      this.router.navigate(['collectionsReport'], {skipLocationChange: true})
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['login'], {skipLocationChange: true})
  }
}
