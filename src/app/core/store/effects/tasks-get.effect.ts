import { CREATE_TASKS } from './../actions/tasks.actions';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TaskService } from '../../services/tasks.service';
import * as tasksActions from '../actions/tasks.actions';
import { catchError, map, exhaustMap, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class TasksEffect {
  constructor(private actions$: Actions, private taskService: TaskService) { }


  @Effect()
  getAllTasks$ = this.actions$.pipe(ofType(tasksActions.GET_ALL_TASKS), map(action => {
    const allTasks = this.taskService.getTask();
    return new tasksActions.GetAllTasksSuccess(allTasks.payload);
  }));




  // @Effect()
  // public registerTransaction$ = this.actions$.pipe(ofType(transactionActions.REGISTER_TRANSACTION))
  //   .pipe(exhaustMap((action: transactionActions.RegisterTransaction) =>
  //     this.bankService.registerNewTransaction(action.payload).pipe(
  //       map((data) => {
  //         if (data.message) {
  //           return new transactionActions.RegisterTransactionSuccess(data.message);
  //         }
  //       }),
  //       catchError((error) => {
  //         return of(new transactionActions.RegisterTransactionFailed(error));
  //       }),
  //     ),
  //   ),
  //   );
}



