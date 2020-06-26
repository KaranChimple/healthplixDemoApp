import {applyMiddleware, compose, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

let store = compose(applyMiddleware(ReduxThunk))(createStore)(rootReducer);

export default store;
