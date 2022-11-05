import { NotificationService } from './../../../shared/notification.service';
import { NoteService } from 'src/app/shared/note.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  showValidationErrors: boolean;

  constructor(
    private readonly noteService: NoteService,
    private readonly router: Router,
    private readonly notificationService: NotificationService
  ) {}
  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      return (this.showValidationErrors = true);
    }
    const note = new Note(form.value.title, form.value.content);
    this.noteService.addNote(note);
    this.router.navigateByUrl('notes');
    this.notificationService.show('Created Note!');
    return;
  }
}
