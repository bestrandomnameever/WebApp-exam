import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manga-cover',
  templateUrl: './manga-cover.component.html',
  styleUrls: ['./manga-cover.component.scss']
})
export class MangaCoverComponent implements OnInit {

  @Input()
  mangaName: string;

  @Input()
  mangaCoverUrl: string;

  @Input()
  mangaSynopsis: string;

  constructor() { }

  ngOnInit() {
  }

}
