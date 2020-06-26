import React from 'react';
import {connect} from 'react-redux';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';
import Logo from '../assets/logo.png';
import {verifyOTP, sendOTP} from '../Actions/index';

class VerifyOTP extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      mobileNo: this.props.navigation.state.params.mobileNo,
    };
  }

  onOtpChanged = (value) => {
    this.setState({code: value});
  };

  componentDidUpdate(prevProps) {
    const {mobileNo} = this.state;
    if (
      !prevProps.verifyOtpState.success &&
      this.props.verifyOtpState.success
    ) {
      this.props.navigation.navigate('dashboard', {mobileNo});
    }
  }

  verifyOtp = () => {
    const {code, mobileNo} = this.state;
    const {sendOTPState} = this.props;
    this.props.verifyOTP({
      mobileNo: mobileNo,
      otpToken: sendOTPState.data.otp_token,
      otp: code,
    });
  };

  resendOtp = () => {
    const {mobileNo} = this.state;
    this.props.sendOTP(mobileNo);
  };

  render() {
    const {code, mobileNo} = this.state;
    return (
      <View style={styles.centerAlignedParentComponent}>
        <Image source={Logo} style={styles.logoHeader} />
        <Text style={styles.verifyOtpHeader}>Please enter the OTP sent to</Text>
        <Text style={styles.verifyOtpNumber}>+91{mobileNo}</Text>
        <OTPInputView
          style={styles.otpInputView}
          pinCount={6}
          code={code}
          onCodeChanged={this.onOtpChanged}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
        />
        <TouchableOpacity style={styles.getOtpButton} onPress={this.verifyOtp}>
          <Text style={styles.getOtpText}>Verify OTP</Text>
        </TouchableOpacity>
        <View style={styles.alignItemsInARow}>
          <Text>{"Didn't receive OTP?"}</Text>
          <TouchableOpacity onPress={this.resendOtp}>
            <Text style={styles.highlightedText}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  verifyOtpState: state.verifyOTPState,
  sendOTPState: state.sendOTPState,
});

export default connect(mapStateToProps, {verifyOTP, sendOTP})(VerifyOTP);
