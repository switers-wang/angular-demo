import { Component } from '@angular/core';

  /** 这里就是这个组件的元数据*/
@Component({
  selector: 'child-one',
  templateUrl: './index.html',
  styleUrls: ['./app.component.less']
})
export class ChildOneComponent { 
  title = 'angular-demo';
  cities = ['上海', '北京', '广州', '深圳'];
  value = '';
  update(value: string) { this.value = value; }
  birthday = new Date();
}
