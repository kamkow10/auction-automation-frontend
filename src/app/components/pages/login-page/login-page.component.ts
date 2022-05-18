import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @Output() onAuthFinished = new EventEmitter<any>();
  public loginOptionChecked = true;
  public loginEmail = '';
  public loginPassword = '';
  public registerEmail = '';
  public registerPassword = '';
  public registerRepeatPassword = '';

  constructor() { }

  ngOnInit(): void {
  }

  public login(): void {
    this.onAuthFinished.emit();
  }

  public register(): void {
    this.onAuthFinished.emit();
  }

}
