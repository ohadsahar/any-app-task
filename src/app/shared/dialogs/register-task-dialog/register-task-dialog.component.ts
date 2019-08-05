import { ShareDataService } from './../../../core/services/share-data.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
import * as generateId from 'shortid';


@Component({
  selector: 'app-register-task-dialog',
  templateUrl: './register-task-dialog.component.html',
  styleUrls: ['./register-task-dialog.component.css'],
})
export class RegisterTaskDialogComponent {
  date: Date;
  constructor(private shareDataService: ShareDataService) {}
  submitRegisterTask(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.validateTaskRegister(form.value)) {
      form.value.id = generateId.generate();
      form.value.creationDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
      this.date = new Date();
      this.date.setDate(this.date.getDate() + form.value.maxDays);
      form.value.deadLine = formatDate(this.date.toString(), 'yyyy/MM/dd', 'en');
      this.shareDataService.changeTask(form.value);
      form.reset();
    }
  }
  validateTaskRegister(data: any) {
    if ( (data.title.length >= 3 && data.title.length <= 15) && data.maxDays >= 1 && data.maxDays <= 100 ) {
      return true;
    }
    return false;
  }
}
