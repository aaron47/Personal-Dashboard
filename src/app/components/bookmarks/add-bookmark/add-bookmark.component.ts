import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BookmarkService } from 'src/app/shared/bookmark.service';
import { Router } from '@angular/router';
import { Bookmark } from 'src/app/shared/bookmark.model';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss'],
})
export class AddBookmarkComponent implements OnInit {
  constructor(
    private readonly bookmarkService: BookmarkService,
    private readonly router: Router,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    const bookmark = new Bookmark(form.value.url, form.value.name);
    this.bookmarkService.addBookmark(bookmark);
    this.router.navigateByUrl('bookmarks');
    this.notificationService.show('Created Bookmark!');
  }
}
