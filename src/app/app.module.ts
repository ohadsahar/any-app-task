import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavbarComponent } from './core/components/top-navbar/top-navbar.component';
import { SearchTaskComponent } from './core/components/search-task/search-task.component';
import {MatInputModule, MatDialogModule, MatButtonModule} from '@angular/material';
import { RegisterTaskDialogComponent } from './shared/dialogs/register-task-dialog/register-task-dialog.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SearchTaskComponent,
    RegisterTaskDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule
  ],
  entryComponents: [RegisterTaskDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
