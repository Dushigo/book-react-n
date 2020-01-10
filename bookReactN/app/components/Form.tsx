import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import * as firebase from 'firebase/app';
import firebaseApp from '../../services/AuthService.tsx';

export interface Props {
    type: string
}

interface State {
    email: string,
    password: string
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: '#eeeeee',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#4f83cc',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default class Form extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  hangleLogin = () => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      console.log('UserNotFound', error);
    });
  };

  handleSignUp = () => {
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(() => console.log('User regitered'));
  };


    saveData = async () => {
      const { type }: Props = this.props;

      if (type !== 'Login') {
        this.handleSignUp();
      } else if (type === 'Login') {
        this.hangleLogin();
      }
    }

    render() {
      const { type }: Props = this.props;
      return (
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            onChangeText={(email) => this.setState({ email })}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Email"
            selectionColor="#fff"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={(password) => this.setState({ password })}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            secureTextEntry
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this.saveData}>{type}</Text>
          </TouchableOpacity>
        </View>
      );
    }
}
