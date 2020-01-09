import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './views/Login.tsx';
import Signup from './views/Signup.tsx';


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
});

export default createAppContainer(AppNavigator);
