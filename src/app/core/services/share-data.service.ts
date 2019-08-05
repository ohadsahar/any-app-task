import { TaskModel } from './../../shared/models/task.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({providedIn: 'root'})

export class ShareDataService {

  private passTask = new BehaviorSubject<TaskModel>(null);
  private passAfterDelete = new BehaviorSubject<TaskModel []>(null);
  currentTask = this.passTask.asObservable();
  newTasks = this.passAfterDelete.asObservable();

  changeTask(taskData: TaskModel) {
    this.passTask.next(taskData);
  }
  changeNewTasksAfterDelete(taskData: TaskModel []) {
    this.passAfterDelete.next(taskData);
  }
}
