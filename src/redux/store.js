import {createStore, combineReducers, compose} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {bank, city, loader} from './reducers';

const store = createStore(
  combineReducers({
    bank,
    city,
    loader,
    form: reduxFormReducer
  }),
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
