import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavbarComponent } from './core/components/top-navbar/top-navbar.component';
import {MatInputModule, MatDialogModule, MatButtonModule, MatDividerModule,
  MatTableModule, MatPaginatorModule, MatSnackBarModule, MatCheckboxModule, MatSortModule} from '@angular/material';
import { RegisterTaskDialogComponent } from './shared/dialogs/register-task-dialog/register-task-dialog.component';
import { FormsModule } from '@angular/forms';
import { TaskTableComponent } from './core/components/task-table/task-table.component';
import { DeleteTaskDialogComponent } from './shared/dialogs/delete-task-dialog/delete-task-dialog.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffect } from './core/store/effects/tasks-get.effect';
import { Reducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    RegisterTaskDialogComponent,
    TaskTableComponent,
    DeleteTaskDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSortModule,
    StoreModule.forRoot(Reducers),
    EffectsModule.forRoot([TasksEffect])
  ],
  entryComponents: [RegisterTaskDialogComponent, DeleteTaskDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
