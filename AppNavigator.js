import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './screens/Home';
import Search from './screens/Search';
import Profile from './screens/Profile';
import { Image } from 'react-native';
import { RenderScreen } from './screens/RenderScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Detail } from './screens/Detail';
import { GameScreen1 } from './screens/GameScreen1';
import { Payment } from './screens/Payment';
import { Thanks } from './screens/Thanks';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Image
                                source={require('./assets/home.png')}
                                style={{
                                    marginTop: 10,
                                    height: 25,
                                    width: 25,
                                }}
                            />
                        );
                    },
                    // tabBarInactiveTintColor: 'gray',
                    // tabBarActiveTintColor: 'tomato',
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('./assets/user.png')}
                            style={{
                                marginTop: 10,
                                height: 25,
                                width: 25,
                            }}
                        />
                    ),
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Main" component={BottomTabNavigation} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Search" options={{ headerTitle: 'Cấu hình đề nghị' }} component={Search}></Stack.Screen>
            <Stack.Screen name="GameScreen1" options={{ headerTitle: 'Thu thập yêu cầu' }} component={GameScreen1}></Stack.Screen>
            <Stack.Screen name="RenderScreen" options={{ headerTitle: 'Render video' }} component={RenderScreen}></Stack.Screen>
            <Stack.Screen name="Payment" options={{ headerTitle: 'Xác nhận thông tin giao hàng' }} component={Payment}></Stack.Screen>
            <Stack.Screen name="Detail" options={{ headerTitle: 'Chi tiết bộ máy' }} component={Detail}></Stack.Screen>
            <Stack.Screen name="Thanks" options={{ headerTitle: '' }} component={Thanks}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default AppNavigator;
