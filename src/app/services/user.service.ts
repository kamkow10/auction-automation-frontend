import {Injectable} from '@angular/core';
import {UserData} from "../models/user-data";
import {Observable} from "rxjs";
import {RestService} from "./rest.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userData: UserData;

  constructor(private restService: RestService) { }

  public login(loginData: UserData): Observable<{token: string}> {
    return this.restService.login(loginData);
  }

  public register(registerData: UserData): Observable<any> {
    return this.restService.register(registerData);
  }

  public logout(): Observable<any> {
    return this.restService.logout();
  }

  public getUserData(): Observable<UserData> {
    return this.restService.getUserData();
  }
}
