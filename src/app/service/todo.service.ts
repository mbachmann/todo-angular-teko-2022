import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos = ["Hallo","Velo","Teko"];
  constructor() {}
  getTodos(): string[] {
    return this.todos;
  }
}
