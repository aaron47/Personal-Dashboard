import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TodoService } from './../../../shared/todo.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
  showValidationErrors: boolean = false;

  todo: Todo;

  constructor(
    private readonly todoService: TodoService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoId = paramMap.get('id');
      this.todo = this.todoService.getTodo(todoId!);
    });
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return (this.showValidationErrors = true);

    this.todoService.updateTodo(this.todo.id, form.value);
    this.notificationService.show('Todo Updated!');
    this.router.navigateByUrl('todos');
    return;
  }
}
