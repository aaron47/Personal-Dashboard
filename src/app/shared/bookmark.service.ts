import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  private bookmarks: Bookmark[] = [
    new Bookmark('https://google.com', 'Google'),
    new Bookmark('https://facebook.com', 'Facebook'),
    new Bookmark('https://youtube.com', 'Youtube'),
    new Bookmark('https://twitter.com', 'Twitter'),
  ];

  get getBookmarks(): Bookmark[] {
    return this.bookmarks;
  }

  getBookmark(id: string) {
    return this.bookmarks.find((bookmark) => bookmark.id === id);
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark);
  }

  updateBookmark(id: string, updatedFields: Partial<Bookmark>) {
    const bookmark = this.getBookmark(id);
    Object.assign(bookmark!, updatedFields);
  }

  deleteBookmark(id: string) {
    const bookmarkIndex = this.bookmarks.findIndex(
      (bookmark) => bookmark.id === id
    );
    if (bookmarkIndex === -1) return;

    this.bookmarks.splice(bookmarkIndex, 1);
  }

  constructor() {}
}
