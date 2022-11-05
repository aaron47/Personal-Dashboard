import { Router } from '@angular/router';
import { TodoService } from './../../shared/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { animate, style, transition, trigger } from '@angular/animations';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    trigger('todo-item-anim', [
      transition(':leave', [
        animate(
          200,
          style({
            opacity: 0,
            height: 0,
            marginBottom: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(
    private readonly todoService: TodoService,
    private readonly router: Router,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos;
  }

  toggleCompleted(todo: Todo) {
    this.todoService.updateTodo(todo.id, { completed: !todo.completed });
  }

  onEditClick(todo: Todo) {
    this.router.navigate(['/todos', todo.id]);
  }

  onDeleteClick(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
    this.notificationService.show('Todo Deleted!');
  }
}
