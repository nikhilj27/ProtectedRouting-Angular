import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message = '';

  constructor(private auth: AuthService) {
    this.message = '';
  }

  ngOnInit() {
  }

  login(username: string, password: string): boolean {
    if (!this.auth.login(username, password)) {
      this.message = 'Incorrect Credentials..:(';
      setTimeout(() => {
        this.message = '';
      }, 2500);
    }
    return false;
  }

  logout(): boolean {
    this.auth.logout();
    return false;
  }

}
