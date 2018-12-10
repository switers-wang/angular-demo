import { State, Action } from '@ngxs/store';

export class Add {
  static readonly type = 'Add';
}
export class Change {
  static readonly type = 'change';
  constructor(public value) {}
}

@State<object>({
  name: 'count',
  defaults: {
    value: 0,
  }
})
export class CountState {
@Action(Add)
  add({ getState, setState }) {
    const state = getState();
    setState({
      value: state.value + 1,
      type: 'add-myself'
    });
  }
@Action(Change)
  change({ getState, setState }, action) {
    const value = action.value;
    const state = getState();
    setState(Number(value));
    setState({
      value: Number(value),
      type: 'change value'
    });
  }
}
