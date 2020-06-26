import axios from 'axios';
import {
  SEND_OTP_LOADING,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAILURE,
  VERIFY_OTP_LOADING,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
} from './types';

const sendOTPLoading = () => {
  return {
    type: SEND_OTP_LOADING,
  };
};

const sendOTPSuccess = (data) => {
  return {
    type: SEND_OTP_SUCCESS,
    data,
  };
};

const sendOTPFailure = (error) => {
  return {
    type: SEND_OTP_FAILURE,
    error,
  };
};

const verifyOTPLoading = () => {
  return {
    type: VERIFY_OTP_LOADING,
  };
};

const verifyOTPSuccess = (data) => {
  return {
    type: VERIFY_OTP_SUCCESS,
    data,
  };
};

const verifyOTPFailure = (error) => {
  return {
    type: VERIFY_OTP_FAILURE,
    error,
  };
};

export const sendOTP = (mobileNo) => async (dispatch) => {
  dispatch(sendOTPLoading());
  try {
    const resp = await axios.post(
      'https://api-test.healthplix.com/api/evolve/sendOtp.php',
      {
        mobile_number: mobileNo,
      },
    );
    dispatch(sendOTPSuccess(resp.data));
  } catch (error) {
    dispatch(sendOTPFailure(error));
  }
};

export const verifyOTP = ({mobileNo, otpToken, otp}) => async (dispatch) => {
  dispatch(verifyOTPLoading());
  try {
    const resp = await axios.post(
      'https://api-test.healthplix.com/api/evolve/verifyOtp.php',
      {
        mobile_number: mobileNo,
        otp_token: otpToken,
        otp: otp,
      },
    );
    dispatch(verifyOTPSuccess(resp.data));
  } catch (error) {
    dispatch(verifyOTPFailure(error));
  }
};
