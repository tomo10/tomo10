import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainParamList } from '../src/MainParamList';
// import { Ionicons } from 'react-native-vector-icons/Ionicons';

import HomeScreen from './pages/HomeScreen';
import EventDetailsScreen from './pages/EventDetailsScreen';
import Calendar from './pages/Calendar';


const AppStack = createStackNavigator<MainParamList>();
const Tabs = createBottomTabNavigator<MainParamList>();

const AppStackScreen = () => (
    <AppStack.Navigator
        screenOptions={{
            headerShown: false,
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}
        >
      <AppStack.Screen name="HomeScreen" component={HomeScreen} />
      <AppStack.Screen 
        name="EventDetailsScreen" 
        options={({route}) => ({
            headerTitle: route.params.event.title,
            headerShown: true,
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerBackTitle: ' '
        })} 
        component={EventDetailsScreen} />
    </AppStack.Navigator>
)

export const Routes: React.FC = ({}) => {

    return (
        <NavigationContainer>
            <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'HomeScreen') {
                    iconName = focused
                      ? 'ios-home'
                      : 'ios-home';
                  } else if (route.name === 'Calendar') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                  }
      
                  // You can return any component that you like here!
                    return <Text>{route.name[0]}</Text>;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
                style: {backgroundColor: 'black', borderColor: 'black'}
              }}
             
            >
                <Tabs.Screen name="HomeScreen" component={AppStackScreen}  />
                <Tabs.Screen name="Calendar" component={Calendar} />
            </Tabs.Navigator>
        </NavigationContainer>
      );
}