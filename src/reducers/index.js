import {combineReducers} from 'redux';
import sendOTPReducer from './sendOTPReducer';
import verifyOTPReducer from './verifyOTPReducer';

// right now we have only 1 reducer, but lets use this format of combineReducers so you can add more later if you need to.
const rootReducer = combineReducers({
  sendOTPState: sendOTPReducer,
  verifyOTPState: verifyOTPReducer,
});

export default rootReducer;
