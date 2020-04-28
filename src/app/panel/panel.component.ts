import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  todos: any = [
    { id: 1, title: 'Shopping' },
    { id: 2, title: 'Cleaning the House' },
    { id: 3, title: 'Checking Emails' },
    { id: 4, title: 'Cleaning the car' },
  ];
  name: string;
  constructor() {}

  onAdd() {
    this.todos.push({ title: this.name });
    this.name = '';
  }

  onRemove(todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  trackByIndex(index, todo) {
    return todo ? todo.id : undefined;
  }

  ngOnInit(): void {}
}
