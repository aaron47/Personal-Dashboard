import { NgForm } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TodoService } from 'src/app/shared/todo.service';
import { Todo } from 'src/app/shared/todo.model';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  showValidationErrors: boolean = false;

  constructor(
    private readonly todoSerivce: TodoService,
    private readonly router: Router,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    if (form.invalid) return (this.showValidationErrors = true);

    const todo = new Todo(form.value.content);
    this.todoSerivce.addTodo(todo);
    this.router.navigateByUrl('todos');
    this.notificationService.show('Created Todo!');
    return;
  }
}
