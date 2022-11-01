import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';

import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const LoginOrProfileRouter = () => {
    return (
        <Stack.Navigator
            initialRouteName='Auth'>
            <Stack.Screen name='Profile' 
                options={{
                    animationTypeForReplace: 'push',
                }} 
                component={Profile}/>            
            <Stack.Screen name='Auth' 
                options={{
                    title: 'Sign in',
                    animationTypeForReplace: 'push',
                }} 
                component={Login}/>
            <Stack.Screen name='Register' component={Register}/>
        </Stack.Navigator>
    )
}
   

export default function Navigation(props) {
    
    return (
        <Tab.Navigator
        initialRouteName="Profile_"
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#e91e63',
        }}
        >
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="home" color={tintColor} size={30} />
                ),
                }}
            />
            <Tab.Screen
                name="AddPhoto"
                component={AddPhoto}
                options={{
                tabBarLabel: 'AddPhoto',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="camera" color={tintColor} size={30} />
                ),
                // tabBarBadge: 3,
                }}
            />
            <Tab.Screen
                name="Profile_"
                component={LoginOrProfileRouter}
                options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="user" color={tintColor} size={30} />
                ),
                }}
            />
        </Tab.Navigator>
    )
}