import {
  VERIFY_OTP_LOADING,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
} from '../Actions/types';

const initialState = {
  isLoading: false,
  data: {},
  error: null,
  success: false,
};

const verifyOTPReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_OTP_LOADING:
      return {...state, isLoading: true};
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
        error: {},
        success: true,
      };
    case VERIFY_OTP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default verifyOTPReducer;
