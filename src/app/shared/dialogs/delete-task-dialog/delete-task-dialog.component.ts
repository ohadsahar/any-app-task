import { TaskService } from './../../../core/services/tasks.service';
import { TaskModel } from './../../models/task.model';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ShareDataService } from 'src/app/core/services/share-data.service';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.css']
})
export class DeleteTaskDialogComponent {
  taskArray: TaskModel[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private taskService: TaskService, private shareDataService: ShareDataService) { }

  deleteSubmitted() {
    this.taskArray = this.taskService.getTask();
    // this.taskArray = this.taskArray.filter(task => !this.data.taskToDelete.includes(task));
    this.taskArray.forEach(task =>  {
      let index = this.data.taskToDelete.findIndex(taskDelete => taskDelete.id === task.id);
      if (index >= 0) {
        this.taskArray.splice(index, 1);
      }
    });
    console.log(this.taskArray);
    this.shareDataService.changeNewTasksAfterDelete(this.taskArray);
  }

}
