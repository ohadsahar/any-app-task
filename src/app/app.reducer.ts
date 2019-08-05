import * as tasksReducer from './core/store/reducers/tasks-get.reducer';
import * as taskCrudReducer from './core/store/reducers/tasks-crud.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  taskReducer: tasksReducer.State;
  taskCrudReducer: taskCrudReducer.State;
}
export const Reducers: ActionReducerMap<State> = {
  taskReducer: tasksReducer.tasksGetReducer,
  taskCrudReducer: taskCrudReducer.tasksCrudGetReducer
};

export const getTasksReducer = createFeatureSelector<tasksReducer.State>('taskReducer');
export const getTasksCrudReducer = createFeatureSelector<taskCrudReducer.State>('taskCrudReducer');


export const getTasksData = createSelector(getTasksReducer, tasksReducer.getTasksData);
export const getTaskCrudData = createSelector(getTasksCrudReducer, taskCrudReducer.getTasksCrudData);

