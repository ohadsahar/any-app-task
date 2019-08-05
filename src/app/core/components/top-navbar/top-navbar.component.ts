import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterTaskDialogComponent } from '../../../shared/dialogs/register-task-dialog/register-task-dialog.component';


@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  registerNewTask() {
    const dialogRef = this.dialog.open(RegisterTaskDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

