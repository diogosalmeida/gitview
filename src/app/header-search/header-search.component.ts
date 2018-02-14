import { Component, OnInit } from '@angular/core';
import { ServiceUserInfo } from '../service-user-info.service';
import { UserGitHub } from '../models/userGitHub';
import { UsersListGitHub } from '../models/usersListGithub';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.css']
})
export class HeaderSearchComponent implements OnInit {

  public users: UsersListGitHub;
  public error: object;

  constructor(private infoUserService: ServiceUserInfo) { }

  ngOnInit() {
  }

  getUserName(userName: string): void {
    this.infoUserService.getUserGithub(userName).subscribe({
      next: (users: UsersListGitHub) => {
       this.users = users;
       console.log(users);
      },
      error: (error) => {
       this.error = error;
      }
    });
  }

}
