import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './views/Login.tsx';
import Signup from './views/Signup.tsx';


interface barButtonIconStyle {
    tintColor: 'white'
}

export default function Routes() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="signup" component={Signup} title="Sign up" />
      </Stack>
    </Router>
  );
}
