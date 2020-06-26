import {
  SEND_OTP_LOADING,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAILURE,
} from '../Actions/types';

const initialState = {
  isLoading: false,
  data: {},
  error: null,
  success: false,
};

const sendOTPReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_OTP_LOADING:
      return {...state, isLoading: true};
    case SEND_OTP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
        error: {},
        success: true,
      };
    case SEND_OTP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        success: false,
      };
    default:
      return state;
  }
};
export default sendOTPReducer;
