import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/shared/bookmark.model';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss'],
})
export class BookmarkTileComponent implements OnInit {
  @Input() bookmark: Bookmark;
  tileIconSource: string;
  faviconError = false;

  constructor() {}

  ngOnInit(): void {
    this.tileIconSource = this.bookmark.url.origin + '/favicon.ico';
  }
}
