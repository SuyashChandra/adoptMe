import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(
  reducer,
  typeof window == 'object' &&
    typeof window.REDUX__DEVTOOLS_ETENSION__ != 'undefined'
    ? window.REDUX__DEVTOOLS_ETENSION__
    : f => f
);

export default store;
