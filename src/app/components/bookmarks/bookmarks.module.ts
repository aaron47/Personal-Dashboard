import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './bookmarks.component';
import { BookmarkTileComponent } from './bookmark-tile/bookmark-tile.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ManageBookmarksComponent } from './manage-bookmarks/manage-bookmarks.component';
import { EditBookmarkComponent } from './edit-bookmark/edit-bookmark.component';

@NgModule({
  declarations: [
    BookmarksComponent,
    BookmarkTileComponent,
    AddBookmarkComponent,
    ManageBookmarksComponent,
    EditBookmarkComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [BookmarksComponent],
})
export class BookmarksModule {}
