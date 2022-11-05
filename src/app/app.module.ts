import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BookmarksModule } from './components/bookmarks/bookmarks.module';
import { NotesModule } from './components/notes/notes.module';
import { TodosModule } from './components/todos/todos.module';
import { AutoFocusDirective } from './shared/auto-focus.directive';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [AppComponent, TabsComponent, AutoFocusDirective, NotificationComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BookmarksModule,
    NotesModule,
    TodosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
