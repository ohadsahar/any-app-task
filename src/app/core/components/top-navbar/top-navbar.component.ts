import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterTaskDialogComponent } from '../../../shared/dialogs/register-task-dialog/register-task-dialog.component';


@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent {

  constructor(public dialog: MatDialog) { }

  registerNewTask() {
    this.dialog.open(RegisterTaskDialogComponent);
  }
}

