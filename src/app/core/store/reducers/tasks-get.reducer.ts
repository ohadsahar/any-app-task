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

export function tasksGetReducer(state = initialState, action: tasksActions.Actions) {
  switch (action.type) {
    case tasksActions.GET_ALL_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    case tasksActions.GET_ALL_TASKS_FAILED:
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
export const getTasksData = (state: State) => state;
