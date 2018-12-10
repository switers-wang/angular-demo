import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Add, CountState, Change } from './state';

@Component({
  selector: 'my-app',
  templateUrl: './index.html',
})
export class Ngxs  {

  @Select(CountState) count$: Observable<object>;

  constructor(private store: Store) {}

  onChange(value) {
    this.store.dispatch(new Change(value)).subscribe(() => {console.log('input 输入值显示')});
  }
  onClick() {
    this.store.dispatch(new Add()).subscribe(() => {console.log('自加显示')});
  }
}
