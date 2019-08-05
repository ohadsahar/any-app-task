import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { TaskService } from '../../services/tasks.service';
import * as tasksActions from '../actions/tasks.actions';


@Injectable({ providedIn: 'root' })

export class TasksEffect {
  constructor(private actions$: Actions, private taskService: TaskService) { }

  @Effect()
  getAllTasks$ = this.actions$.pipe(ofType(tasksActions.GET_ALL_TASKS), map(action => {
    if (action) {
      const allTasks = this.taskService.getTask();
      return new tasksActions.GetAllTasksSuccess(allTasks);
    }
    return new tasksActions.GetAllTasksFailed(action);
  }));
  @Effect()
  registerTask$ = this.actions$.pipe(ofType(tasksActions.CREATE_TASKS), map(action => {
    if (action) {
      const newTask = this.taskService.saveTask(action);
      return new tasksActions.CreateTaskSuccess(newTask);
    }
    return new tasksActions.CreateTaskFailed(action);
  }));
  @Effect()
  deleteTask$ = this.actions$.pipe(ofType(tasksActions.DELETE_TASKS), map(action => {
    if (action) {
      const newTask = this.taskService.saveTask(action);
      return new tasksActions.DeleteTaskSuccess(newTask);
    }
    return new tasksActions.DeleteTaskFailed(action);
  }));
}



