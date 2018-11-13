import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<h1>hello world</h1><h2>welcome {{name}}</h2>',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-demo';
  name = 'wangxupeng'
}
