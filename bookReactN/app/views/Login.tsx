import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Form from '../components/Form.tsx';

export interface Props {
    navigation: any
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: '#12799f',
    fontSize: 16,
  },
  signupButton: {
    color: '#12799f',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default class Login extends Component<Props> {
  signup = () => {
    const { navigation }: Props = this.props;
    navigation.navigate('Signup');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Form type="Login" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Dont have an account yet? </Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
