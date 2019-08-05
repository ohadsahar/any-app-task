import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
import * as validateTask from './validation/register-task-dialog-validator.function';
import * as generateId from 'shortid';

@Component({
  selector: 'app-register-task-dialog',
  templateUrl: './register-task-dialog.component.html',
  styleUrls: ['./register-task-dialog.component.css']
})
export class RegisterTaskDialogComponent {
  constructor() { }

  submitRegisterTask(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (validateTask.validateTaskRegister(form.value)) {
      form.value.id = generateId.generate();
      form.value.creationDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
      console.log(form.value);
    }
  }
}
