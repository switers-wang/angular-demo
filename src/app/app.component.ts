import { Component } from '@angular/core';

  /** 这里就是这个组件的元数据*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<h1>hello world</h1>' + 
    '<h2>welcome {{name}}</h2>' + 
    '<img [src]="url" />' + 
    '<button (click)="showName()">click show my name</button>' + 
    '<input type="text" required [(ngModel)]="inputvalue"><span>输入的值是{{inputvalue}}</span>',
  styleUrls: ['./app.component.less']
})
export class AppComponent { 
  title = 'angular-demo';
  name = 'wangxupeng'
  inputvalue = '';
  url="https://b-ssl.duitang.com/uploads/item/201311/28/20131128155314_yQyMj.jpeg"
  showName = () => {
    alert(`hello ${this.name}`);
  }
}
