import { TaskModel } from '../../../models/task.model';

export function validateTaskRegister(data: TaskModel) {

  if ((data.title.length >= 3 && data.title.length <= 15) &&
    (data.maxDays >= 1 && data.maxDays <= 100)) {
    return true;
  }
  return false;
}



