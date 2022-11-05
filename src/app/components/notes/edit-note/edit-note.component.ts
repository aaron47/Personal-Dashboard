import { NoteService } from './../../../shared/note.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {
  note: Note;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly noteService: NoteService,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id');
      this.note = this.noteService.getNote(idParam!);
    });
  }

  onFormSubmit(form: NgForm) {
    this.noteService.updateNote(this.note.id, form.value);
    this.notificationService.show('Note Updated!');
    this.router.navigateByUrl('/notes');
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id);
    this.notificationService.show('Note Deleted!');
    this.router.navigateByUrl('/notes');
  }
}
