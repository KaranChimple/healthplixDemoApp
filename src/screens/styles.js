import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  centerAlignedParentComponent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  logoHeader: {
    height: height * 0.1,
    width: '90%',
    marginBottom: height * 0.1,
  },
  textInputView: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '90%',
  },
  textInput: {marginLeft: 15},
  getOtpButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: width * 0.2,
    backgroundColor: 'blue',
  },
  getOtpText: {
    color: '#fff',
    fontSize: 18,
  },
  verifyOtpHeader: {
    fontSize: 18,
  },
  verifyOtpNumber: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: '#333',
  },
  otpInputView: {width: '80%', height: 200},
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
    color: 'blue',
  },
  alignItemsInARow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  highlightedText: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    textDecorationLine: 'underline',
  },
});

export default styles;
