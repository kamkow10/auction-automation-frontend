import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserData} from "../../../models/user-data";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @Output() onCorrectLogin = new EventEmitter<any>();
  public loginOptionChecked = true;
  public loginEmail = '';
  public loginPassword = '';
  public registerEmail = '';
  public registerPassword = '';
  public registerRepeatPassword = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public login(): void {
    const loginData = new UserData(this.loginEmail, this.loginPassword);
    this.userService.login(loginData).subscribe(response => {
      if (response.token) {
        localStorage.setItem('access-token', response.token);
        this.onCorrectLogin.emit();
      }
    });
  }

  public register(): void {
    const registerData = new UserData(this.registerEmail, this.registerPassword);
    this.userService.register(registerData).subscribe(() => {
      console.log('registered!')
    });
  }

}
