import { TaskService } from './../../services/tasks.service';
import { ShareDataService } from './../../services/share-data.service';
import { RegisterTaskDialogComponent } from './../../../shared/dialogs/register-task-dialog/register-task-dialog.component';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, Sort } from '@angular/material';
import { TaskModel } from './../../../shared/models/task.model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSnackBarService } from '../../services/mat-snackbar.service';
import { DeleteTaskDialogComponent } from 'src/app/shared/dialogs/delete-task-dialog/delete-task-dialog.component';
import * as fromRoot from '../../../app.reducer';
import * as tasksActions from '../../store/actions/tasks.actions';

import { Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource();
  taskArray: TaskModel[];
  deleteTaskArray: TaskModel[];
  sortedData: TaskModel[];
  empty: boolean;
  dataToSubscribe: Subscription;

  private ngbSubscribe$: Subject<void> = new Subject<void>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialog: MatDialog, private shareDataService: ShareDataService, private snackbarService: MatSnackBarService,
    private taskService: TaskService, private store: Store<fromRoot.State>) {
    this.taskArray = [];
    this.deleteTaskArray = [];
    this.sortedData = [];
    this.empty = true;
  }
  ngOnInit() {
    this.onLoadComponent();
    this.displayedColumns = ['id', 'title', 'deadLine'];
  }
  onLoadComponent() {
    this.store.dispatch(new tasksActions.GetAllTasks());
    this.dataToSubscribe = this.store.select(fromRoot.getTasksData).pipe(takeUntil(this.ngbSubscribe$))
      .subscribe((response) => {
        if (response.loaded) {
          this.taskArray = response.data;
          this.subscribeForNewTasks();
          this.updateTable();
        }
      }
      );
  }
  registerNewTask() {
    this.dialog.open(RegisterTaskDialogComponent);
  }
  deleteTasksDialog() {
    const dialogRef = this.dialog.open(DeleteTaskDialogComponent, {
      data: {
        taskToDelete: this.deleteTaskArray
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.empty = true;
      this.deleteTaskArray = [];
      if (result) {
        this.shareDataService.newTasks.subscribe(response => {
          if (response) {
            this.store.dispatch(new tasksActions.DeleteTasks(response));
            const dataToSubscribe = this.store.select(fromRoot.getTaskCrudData).pipe(takeUntil(this.ngbSubscribe$))
              .subscribe((data) => {
                if (data.loaded) {
                  this.taskArray = response;
                  this.updateTable();
                  this.taskService.saveTask(this.taskArray);
                  dataToSubscribe.unsubscribe();
                }
              });
          }
        });
      }
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  updateTable(): void {
    this.dataSource = new MatTableDataSource(this.taskArray);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  afterRegisterNewTask(response: TaskModel) {
    this.store.dispatch(new tasksActions.CreateTask(response));
    const dataToSubscribe = this.store.select(fromRoot.getTaskCrudData).pipe(takeUntil(this.ngbSubscribe$))
      .subscribe((data) => {
        if (data.loaded) {
          this.taskArray.push(response);
          this.taskService.saveTask(this.taskArray);
          this.snackbarService.Message('Task successfully added', 'Dismiss');
          this.updateTable();
          dataToSubscribe.unsubscribe();

        }
      });
  }
  toggleItem(item: TaskModel) {
    if (!item.isDone) {
      this.displayedColumns = ['id', 'title', 'deadLine', 'taskContent'];
    } else {
      this.displayedColumns = ['id', 'title', 'deadLine'];
    }
    item.isDone = !item.isDone;
  }
  beforeDelete(row: TaskModel) {
    const index = this.deleteTaskArray.findIndex(task => task.id === row.id);
    if (index >= 0) {
      this.deleteTaskArray.splice(index, 1);
    } else {
      this.deleteTaskArray.push(row);
    }
    this.EmptyOrFull();
  }
  EmptyOrFull() {
    if (this.deleteTaskArray.length > 0) {
      this.empty = false;
    } else {
      this.empty = true;
    }
  }
  subscribeForNewTasks() {
    this.shareDataService.currentTask.subscribe(response => {
      if (response) {
        this.afterRegisterNewTask(response);
      }
    },
      (error) => {
        this.snackbarService.Message(error, 'Dismiss');
      });
  }
  sortData(sort: Sort) {
    this.sortedData = this.taskArray;
    const data = this.taskArray.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return this.compare(a.id, b.id, isAsc);
        case 'title': return this.compare(a.title, b.title, isAsc);
        case 'deadLine': return this.compare(a.deadLine, b.deadLine, isAsc);
        default: return 0;
      }
    });
    this.taskArray = this.sortedData;
    this.updateTable();
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  ngOnDestroy() {
    this.dataToSubscribe.unsubscribe();
  }
}
