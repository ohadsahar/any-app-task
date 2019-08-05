import { TaskModel } from './../../shared/models/task.model';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class TaskService {

  saveTask(taskArray: TaskModel[]) {
    return localStorage.setItem('tasks', JSON.stringify(taskArray));
  }
  getTask() {
    if (JSON.parse(localStorage.getItem('tasks'))) {
      return JSON.parse(localStorage.getItem('tasks'));
    } else {
      return [];
    }
  }
}
