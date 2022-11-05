import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes: Note[] = [
    new Note('xdddddd', 'lololololo'),
    new Note('lolololol', 'xdddddd'),
  ];

  constructor() {}

  get getNotes(): Note[] {
    return this.notes;
  }

  getNote(id: string): Note {
    return this.notes.find((note) => note.id === id)!;
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  updateNote(id: string, updatedFields: Partial<Note>) {
    const note = this.getNote(id);

    Object.assign(note, updatedFields);
  }

  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);

    if (noteIndex === -1) return;

    this.notes.splice(noteIndex, 1);
    // this.notes.filter((note) => note.id !== id);
  }
}
