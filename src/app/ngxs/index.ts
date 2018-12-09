import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Add, CountState } from './state';

@Component({
  selector: 'my-app',
  templateUrl: './index.html',
})
export class Ngxs  {

  @Select(CountState) count$: Observable<number>;

  constructor(private store: Store) {}

  onClick() {
    this.store.dispatch(new Add());
  }

}
