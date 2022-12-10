import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    FontAwesome,
    MaterialIcons,
    AntDesign,
    MaterialCommunityIcons
} from '@expo/vector-icons';


import HomeScreen from '../screens/HomeScreen';
import DescriptionScreen from '../screens/DescriptionScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PopularScreen from '../screens/PopularScreen';


const Tab = createBottomTabNavigator();

export const BottomTab = () => {

    return (
        <Tab.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                tabBarActiveBackgroundColor: '#EF4140',
                tabBarStyle: { backgroundColor: '#D48C8F', height: 80, justifyContent: 'center', },
            }}>

            <Tab.Screen name='HomeScreen' component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={40} color="#FFFFFF" />
                    ),

                    headerShown: false,
                }}
            />
            <Tab.Screen name='ProfileScreen' component={PopularScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="favorite" size={40} color="#FFFFFF" />
                    ),

                    headerShown: false,
                }} />

            <Tab.Screen name='DescriptionScreen' component={DescriptionScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="book" size={40} color="#FFFFFF" />
                    ),

                    headerShown: false,
                }} />

            <Tab.Screen name='FavoritesScreen' component={FavoritesScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="progress-star" size={40} color="#FFFFFF" />
                    ),

                    headerShown: false,
                }} />
        </Tab.Navigator>
    )
}