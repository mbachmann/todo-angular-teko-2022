import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {TodoItemControllerService, TodoItemListsDTO} from "../openapi-gen";

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.scss']
})
export class TodoListsComponent implements OnInit, OnDestroy  {

  private subscription: Subscription | undefined;
  todoLists: TodoItemListsDTO = {};

  constructor(private readonly todoItemControllerService: TodoItemControllerService) {}

  ngOnDestroy(): void {

    if (this.subscription != undefined)  {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.todoItemControllerService.getListIDs().subscribe(
      data => {
        this.todoLists = data;
      },
      err => console.log(err)
    );
  }
}
