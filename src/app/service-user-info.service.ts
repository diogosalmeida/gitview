import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { UserGitHub } from './models/userGitHub';

@Injectable()
export class ServiceUserInfo {
  public user: UserGitHub;
  constructor(private http: HttpClient) { }

  getUserGithub(user: string): Observable<object> {
   return this.http.get(`https://api.github.com/search/users?q=${user}?page=1`);
  }

}
