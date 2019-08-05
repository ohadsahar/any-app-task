import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material';


@Injectable({ providedIn: 'root' })

export class MatSnackBarService {

  constructor(private snackbar: MatSnackBar) {}

  Message(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }
}
