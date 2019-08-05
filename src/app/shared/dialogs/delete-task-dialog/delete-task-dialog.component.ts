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
    this.data.taskToDelete.forEach(taskDelete => {
      this.taskArray = this.taskArray.filter(task => task.id !== taskDelete.id);
    });
    this.shareDataService.changeNewTasksAfterDelete(this.taskArray);
  }

}
