import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import GetMobileNumber from './screens/getMobileNumber';
import VerifyOtp from './screens/verifyOTP';
import Dashboard from './screens/dashboard';

const StackNav = createStackNavigator(
  {
    sendOTP: {screen: GetMobileNumber},
    verifyOTP: {screen: VerifyOtp},
    dashboard: {screen: Dashboard},
  },
  {initialRouteName: 'sendOTP'},
);

const Routes = createAppContainer(StackNav);

export default Routes;
