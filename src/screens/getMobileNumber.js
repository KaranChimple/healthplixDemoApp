import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {sendOTP} from '../Actions/index';
import Logo from '../assets/logo.png';
import styles from './styles';

class GetMobileNumber extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      phoneNo: '',
    };
  }

  onPhoneNumberChange = (no) => {
    this.setState({phoneNo: no.replace(/[^0-9]/g, '')});
  };

  sendOtp = () => {
    const {phoneNo} = this.state;
    this.props.sendOTP(phoneNo);
  };

  componentDidUpdate(prevProps) {
    const {phoneNo} = this.state;
    if (!prevProps.sendOTPState.success && this.props.sendOTPState.success) {
      this.props.navigation.navigate('verifyOTP', {mobileNo: phoneNo});
    }
  }

  render() {
    const {phoneNo} = this.state;
    return (
      <View style={styles.centerAlignedParentComponent}>
        <Image source={Logo} style={styles.logoHeader} />
        <View style={styles.textInputView}>
          <Text>+91</Text>
          <TextInput
            value={phoneNo}
            keyboardType="numeric"
            placeholder="Enter your mobile number"
            maxLength={10}
            onChangeText={this.onPhoneNumberChange}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity style={styles.getOtpButton} onPress={this.sendOtp}>
          <Text style={styles.getOtpText}>Get OTP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  sendOTPState: state.sendOTPState,
});

export default connect(mapStateToProps, {sendOTP})(GetMobileNumber);
