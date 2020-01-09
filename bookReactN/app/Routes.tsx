import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './views/Login';
import Signup from './views/Signup';


interface barButtonIconStyle {
    tintColor: 'white'
}

const styles = StyleSheet.create({
    barButtonIconStyle: {
        tintColor: 'white'
    }
})

export default class Routes extends Component<{}> {
    render() {
        return (
            <Router>
                <Stack key="root">
                <Scene key="login" component={Login} title="Login"/>
                <Scene key="signup" component={Signup} title="Sign up"/>
                </Stack>
            </Router>
        )
    }
}