import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public currentUrl: string;
  public userEmail = '';

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userEmail = this.userService.userData.email;
    this.currentUrl = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.router.url
      }
    });
  }

  public logout(): void {
    this.userService.logout().subscribe(() => {
      localStorage.clear();
      window.location.href = '';
    })
  }

}
