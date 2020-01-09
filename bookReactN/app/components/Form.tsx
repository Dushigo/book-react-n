import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Keyboard,
} from 'react-native';


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

    saveData = async () => {
      const { email, password } = this.state;
      const { type }: Props = this.props;
      const loginDetails : State = {
        email,
        password,
      };

      if (type !== 'Login') {
        AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

        Keyboard.dismiss();
        console.log(`You successfully registered. Email: ${email} password: ${password}`);
      } else if (type === 'Login') {
        try {
          const ld = JSON.parse(await AsyncStorage.getItem('loginDetails'));

          if (ld.email != null && ld.password != null) {
            if (ld.email === email && ld.password === password) {
              console.log('Go in!');
            } else {
              console.log('Email and Password does not exist!');
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    showData = async () => {
      const loginDetails = await AsyncStorage.getItem('loginDetails');
      const ld = JSON.parse(loginDetails);
      console.log(`email: ${ld.email}  password: ${ld.password}`);
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
            placeholderTextColor="#002f6c"
            selectionColor="#fff"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={(password) => this.setState({ password })}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#002f6c"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this.saveData}>{type}</Text>
          </TouchableOpacity>
        </View>
      );
    }
}
