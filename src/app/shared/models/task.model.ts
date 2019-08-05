export interface TaskModel {
  id: string;
  title: string;
  taskContent: string;
  maxDays: number;
  creationDate: Date;
  deadLine: string;
  isDone: boolean;
}
