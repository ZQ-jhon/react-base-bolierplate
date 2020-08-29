import { createStore, Action } from 'redux';
import { ExampleActionTypes } from '../actions/app.action';

function counter(state = 0, action: Action<ExampleActionTypes>) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}

export const store = createStore(counter);

//  store.subscribe(() =>
//   console.log(store.getState())
// );

// <Provider store={store}> 
//  ...
// </Provider>


// store.dispatch({ type: 'INCREMENT' });