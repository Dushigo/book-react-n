import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './views/Login';
import Signup from './views/Signup';


const styles = {
    barButtonIconStyle: {
        tintColor: 'white'
    }
}

export default class Routes extends Component {
    render() {
        return (
            <Router barButtonIconStyle ={styles.barButtonIconStyle}
                hideNavBar={false} 
                navigationBarStyle={{backgroundColor: '#1565c0',}} 
                titleStyle={{color: 'white',}}
            >
                <Stack key="root">
                <Scene key="login" component={Login} title="Login"/>
                <Scene key="signup" component={Signup} title="Sign up"/>
                </Stack>
            </Router>
        )
    }
}