import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatDialogModule,
  MatDividerModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSortModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSortModule,
  ],
  exports: [
    MatInputModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSortModule,
  ]
})
export class AngularMaterialModule {}
