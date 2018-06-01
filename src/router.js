import React from 'react';
import { 
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './home'
import TodolistScreen from './todolist'
import Completed from './todolist/completed'
import Incomplete from './todolist/incomplete'



export const TodolistTabs = createBottomTabNavigator({
  All: {
    screen: TodolistScreen,
  },
  Completed: {screen: Completed},
  Incomplete: {screen: Incomplete}
},
{
  navigationOptions:({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor}) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'All'){
        iconName = `ios-list-box${focused ? '' : '-outline'}`
      } else if(routeName === 'Completed'){
        iconName = `ios-flag${focused ? '' : '-outline'}`
      }else if(routeName === 'Incomplete'){
        iconName = `ios-create${focused ? '' : '-outline'}`
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />
      
    }
  }),
  tabBarOptions: {
    activeTintColor: '#448AFF',
    inactiveTintColor: '#455A64',
    labelStyle:{
      fontSize: 13,
    },
    style:{
      backgroundColor: '#fff',
    }
  },
}
)

export const RootStack = createStackNavigator({
  Home: HomeScreen,
  Todolist: {
    screen: TodolistTabs,
  },
},
{
  mode: 'modal',
  headerMode: 'none',
});

