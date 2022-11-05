import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() editClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onEditClick(): void {
    this.editClick.emit();
  }

  onDeleteClick(): void {
    this.deleteClick.emit();
  }
}
