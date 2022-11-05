import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AutoFocusDirective } from 'src/app/shared/auto-focus.directive';

@NgModule({
  declarations: [
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    EditTodoComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [TodosComponent],
})
export class TodosModule {}
