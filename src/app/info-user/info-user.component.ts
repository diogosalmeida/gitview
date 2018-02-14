import { Component, OnInit, Input } from '@angular/core';
import { UserGitHub } from '../models/userGitHub';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  @Input() user: UserGitHub;

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}
