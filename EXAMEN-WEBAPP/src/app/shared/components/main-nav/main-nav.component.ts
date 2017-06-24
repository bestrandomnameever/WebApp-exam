import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from './../../services/search.service';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  searchTerm: string = "";

  constructor(
    private userService: UserService,
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  navigateToHome() {
    this.router.navigateByUrl("/");
  }

  search() {
    this.searchService.search(this.searchTerm);
  }

  logOut() {
    this.userService.purgeAuth();
    this.navigateToHome();
  }
}
