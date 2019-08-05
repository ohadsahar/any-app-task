import * as tasksActions from '../actions/tasks.actions';

export interface State {
  data: any;
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  data: [],
  loading: true,
  loaded: false
}

export function tasksCrudGetReducer(state = initialState, action: tasksActions.Actions) {
  switch (action.type) {
    case tasksActions.CREATE_TASKS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    case tasksActions.CREATE_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    case tasksActions.CREATE_TASKS_FAILED:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    case tasksActions.DELETE_TASKS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    case tasksActions.DELETE_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    case tasksActions.DELETE_TASKS_FAILED:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    default:
      return state;
  }
}
export const getTasksCrudData = (state: State) => state;
