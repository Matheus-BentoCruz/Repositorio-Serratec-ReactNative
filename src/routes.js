import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Posts from './screens/posts';
import Users from './screens/Users';

const stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
          <stack.Navigator initialRouteName="Posts">
              <stack.Screen name="Posts" component={Posts}/>
              <stack.Screen name="Users" component={Users} />
          </stack.Navigator>     
        </NavigationContainer>
      );
};

export default Routes;