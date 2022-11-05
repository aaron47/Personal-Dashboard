import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    new Todo('This is the test todo1'),
    new Todo('This is the test todo2'),
  ];

  constructor() {}

  get getTodos(): Todo[] {
    return this.todos;
  }

  getTodo(id: string): Todo {
    return this.todos.find((todo) => todo.id === id)!;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(id: string, updatedFields: Partial<Todo>) {
    const note = this.getTodo(id);

    Object.assign(note, updatedFields);
  }

  deleteTodo(id: string) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) return;

    this.todos.splice(todoIndex, 1);
  }
}
