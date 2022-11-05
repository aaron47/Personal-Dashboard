import { AddNoteComponent } from './components/notes/add-note/add-note.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { NotesComponent } from './components/notes/notes.component';
import { TodosComponent } from './components/todos/todos.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';
import { AddTodoComponent } from './components/todos/add-todo/add-todo.component';
import { EditTodoComponent } from './components/todos/edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './components/bookmarks/add-bookmark/add-bookmark.component';
import { ManageBookmarksComponent } from './components/bookmarks/manage-bookmarks/manage-bookmarks.component';
import { EditBookmarkComponent } from './components/bookmarks/edit-bookmark/edit-bookmark.component';

const routes: Routes = [
  {
    path: 'bookmarks',
    component: BookmarksComponent,
    data: { tab: 1 },
  },
  {
    path: 'bookmarks/add',
    component: AddBookmarkComponent,
  },
  {
    path: 'bookmarks/manage',
    component: ManageBookmarksComponent,
    children: [
      {
        path: ':id',
        component: EditBookmarkComponent,
      },
    ],
  },

  {
    path: 'todos',
    component: TodosComponent,
    data: { tab: 2 },
  },
  {
    path: 'todos/add',
    component: AddTodoComponent,
  },
  {
    path: 'todos/:id',
    component: EditTodoComponent,
  },
  {
    path: 'notes',
    component: NotesComponent,
    data: { tab: 3 },
  },
  {
    path: 'notes/add',
    component: AddNoteComponent,
  },
  {
    path: 'notes/:id',
    component: EditNoteComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/bookmarks',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/bookmarks',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
