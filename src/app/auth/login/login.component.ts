import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor( private authService: AuthService){}

  user:string ='user';
  password:string='password';

  login(){
    this.authService.login(this.user, this.password)
  }
}
