import { Component } from '@angular/core';

  /** 这里就是这个组件的元数据*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent { 
  title = 'angular-demo';
  birthday = new Date();
}
