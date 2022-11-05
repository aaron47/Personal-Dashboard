import { NotificationService } from './../../../shared/notification.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BookmarkService } from 'src/app/shared/bookmark.service';
import { Bookmark } from 'src/app/shared/bookmark.model';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss'],
})
export class EditBookmarkComponent implements OnInit {
  bookmark: Bookmark;

  constructor(
    private readonly bookmarkService: BookmarkService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.bookmark = this.bookmarkService.getBookmark(paramMap.get('id')!)!;
    });
  }

  onFormSubmit(form: NgForm) {
    this.bookmarkService.updateBookmark(this.bookmark.id, {
      name: form.value.name,
      url: new URL(form.value.url),
    });

    this.notificationService.show('Bookmark Updated!');
  }

  deleteBookmark() {
    this.bookmarkService.deleteBookmark(this.bookmark.id);
    this.notificationService.show('Bookmark Deleted!');
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
