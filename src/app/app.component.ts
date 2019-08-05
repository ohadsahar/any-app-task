import { environment } from './../environments/environment';
import { Component, enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
  window.console.log = function () { };
  window.console.error = function () { };
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'any-app-task';
}
