import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manga-cover',
  templateUrl: './manga-cover.component.html',
  styleUrls: ['./manga-cover.component.scss']
})
export class MangaCoverComponent implements OnInit {

  @Input()
  mangaSlug: string;
  @Input()
  mangaName: string;
  @Input()
  mangaCoverUrl: string;
  @Input()
  mangaSynopsis: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  openDetail() {
    this.router.navigateByUrl('/manga/' + this.mangaSlug);
  }

}
