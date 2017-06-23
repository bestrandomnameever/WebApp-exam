import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from './../../services/search.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  searchTerm: string = "";

  constructor(
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

}
