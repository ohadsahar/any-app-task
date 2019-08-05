import { TaskModel } from './../../shared/models/task.model';
import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })

export class TaskService {

  saveTask(taskArray: TaskModel[]) {
    localStorage.setItem('tasks', JSON.stringify(taskArray));
    return taskArray;

  }
  getTask() {
    if (JSON.parse(localStorage.getItem('tasks'))) {
      return JSON.parse(localStorage.getItem('tasks'));
    } else {
      return [];
    }
  }
}
