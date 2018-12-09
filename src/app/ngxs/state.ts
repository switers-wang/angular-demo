import { State, Action } from '@ngxs/store';

export class Add {
  static readonly type = 'Add';
}
export class Change {
  static readonly type = 'change';
  constructor(public value) {}
}

@State<number>({
  name: 'count',
  defaults: 0
})
export class CountState {
@Action(Add)
  add({ getState, setState }) {
    const state = getState();
    setState(state + 1);
  }
@Action(Change)
  change({ getState, setState }, action) {
    const value = action.value;
    const state = getState();
    setState(value);
  }
}
