import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Text,
  TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Splash from './views/splash'
import Wellcome from './views/wellcome'

import Popular from './views/popular'
import Trending from './views/trending'
import Favorite from './views/favorite'
import Detail from './views/detail'
import Search from './views/search'

import Me from './views/me/me'
import CustomTag from './views/me/customTag'
import SortTag from './views/me/sortTag'

import AboutApp from './views/about/aboutApp'
import AboutAuthor from './views/about/aboutAuthor'
import WebView from './views/about/webView'

export const PopularStack = createStackNavigator({
  Popular: {
    screen: Popular,
  }
}, {
  navigationOptions: ({
    navigation
  }) => ({
    headerStyle:{
      backgroundColor: '#6570e2',
      borderBottomColor: 'transparent',
      borderWidth: 0,
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
    }
  })
})

export const TrendingStack = createStackNavigator({
  Trending: {
    screen: Trending,
  },
}, {
  navigationOptions: ({
    navigation
  }) => ({
    headerStyle: {
      backgroundColor: '#6570e2',
      borderBottomColor: 'transparent',
      borderWidth: 0,
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
    }
  })
})

export const FavoriteStack = createStackNavigator({
  Favorite: {
    screen: Favorite,
  },
}, {
  navigationOptions: ({
    navigation
  }) => ({
    headerStyle: {
      backgroundColor: '#6570e2',
      borderBottomColor: 'transparent',
      borderWidth: 0,
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
    }
  })
})

export const MeStack = createStackNavigator({
  Me: {
    screen: Me,
  },
}, {
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#6570e2',
      borderBottomColor: 'transparent',
      borderWidth: 0,
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
    }
  })
})

export const GithubTabs = createBottomTabNavigator({
  Popular: {
    screen: PopularStack
  },
  Trending: {
    screen: TrendingStack
  },
  Favorite: {
    screen: FavoriteStack
  },
  Me: {
    screen: MeStack
  }
}, {
    navigationOptions: ({ navigation}) => ({
    tabBarIcon: ({ focused, tintColor}) => {
      const {routeName} = navigation.state;
      let iconName;
      if (routeName === 'Popular') {
        iconName = `ios-flame${focused ? '' : '-outline'}`
      } else if (routeName === 'Trending') {
        iconName = `ios-bonfire${focused ? '' : '-outline'}`
      } else if (routeName === 'Favorite') {
        iconName = `md-heart${focused ? '' : '-outline'}`
      } else if (routeName === 'Me') {
        iconName = `ios-person${focused ? '' : '-outline'}`
      }
      return <Ionicons name = {iconName} size = {25} color = {tintColor} />

    },
  }),
  tabBarOptions: {
    activeTintColor: '#6570e2',
    inactiveTintColor: '#455A64',
    labelStyle: {
      fontSize: 13,
    },
    style: {
      backgroundColor: '#fff',
    }
  }
})

export const GithubStack = createStackNavigator({
  GithubTabs: {
    screen: GithubTabs,
  },
  CustomTag: {
    screen: CustomTag,
  },
  SortTag: {
    screen: SortTag,
  },
  Detail:{
    screen: Detail
  },
  AboutApp:{
    screen: AboutApp
  },
  AboutAuthor:{
    screen: AboutAuthor
  },
  WebView:{
    screen: WebView
  },
  Search:{
    screen: Search
  }
},{
  navigationOptions:({navigation})=>({
    headerStyle: {
      backgroundColor: '#6570e2',
      borderBottomColor: 'transparent',
      borderWidth: 0,
      elevation: 0,
      shadowOpacity: 0,
      height:0
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
    }
  })
  
}
)

export const AppStack = createStackNavigator({
  // Splash: {
  //   screen: Splash,
  // },
  // Wellcome: {
  //   screen: Wellcome,
  // },
  GithubStack: {
    screen: GithubStack
  }
}, {
  // initialRouteName: 'Splash',
  mode: 'card',
  headerMode: 'none',
})