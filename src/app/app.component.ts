import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isUserLoggedIn = false;
  public pageLoaded = false;

  constructor(private userService: UserService) {
  }

  async ngOnInit() {
    await this.userService.getUserData().toPromise().then(userData => {
      if (userData) {
        this.userService.userData = userData;
        this.pageLoaded = true;
        this.isUserLoggedIn = true;
      }
    }, () => {
      this.pageLoaded = true;
    });
  }

  public onCorrectLogin(): void {
    this.ngOnInit();
  }

}
