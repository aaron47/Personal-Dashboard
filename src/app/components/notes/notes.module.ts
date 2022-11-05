import { AppRoutingModule } from './../../app-routing.module';
import { NotesComponent } from './notes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { FormsModule } from '@angular/forms';
import { EditNoteComponent } from './edit-note/edit-note.component';

@NgModule({
  declarations: [
    NotesComponent,
    AddNoteComponent,
    NoteCardComponent,
    EditNoteComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [NotesComponent],
})
export class NotesModule {}
