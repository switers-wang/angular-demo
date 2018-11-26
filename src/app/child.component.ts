import { Component, Input } from '@angular/core';

  /** 这里就是这个组件的元数据*/
@Component({
  selector: 'child-dom',
  template: '<h3>父组件传过来的cityItem = {{cityItem}}</h3>' + 
            '<p>{{titleName}}</p>',
})
export class ChildComponent { 
  @Input() cityItem
  @Input('title') titleName
}