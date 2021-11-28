import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  usuario: User;
  constructor(private loginService: AuthenticationService) {
    let currentUser = this.loginService.currentUserValue;
    if (currentUser) {
      this.usuario = currentUser;
    }
  }
}
