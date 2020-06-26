import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mobileNo: this.props.navigation.state.params.mobileNo,
    };
  }

  render() {
    const {mobileNo} = this.state;
    return (
      <View style={styles.centerAlignedParentComponent}>
        <Text>Dashboard Screen</Text>
        <Text>Welcome +91{mobileNo}</Text>
      </View>
    );
  }
}

export default Dashboard;
