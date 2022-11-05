import { v4 as uuidv4 } from 'uuid';

export class Todo {
  id: string;
  completed: boolean;

  constructor(public content: string) {
    this.id = uuidv4();
    this.completed = false;
  }
}
