import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './screens/Home';
import { Search } from './screens/Search';
import Profile from './screens/Profile';
import { Image } from 'react-native';
import { RenderScreen } from './screens/RenderScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Detail } from './screens/Detail';
import { GameScreen1 } from './screens/GameScreen1';
import { Payment } from './screens/Payment';
import { Thanks } from './screens/Thanks';
import { Login } from './screens/Login';
import { ShippingInfo } from './screens/ShippingInfo';
import HistoryBuild from './screens/HistoryBuild';
import { HisDetail } from './screens/HisDetail';
import { Processing } from './screens/Processing';
import { Complete } from './screens/Complete';
import { Cart } from './screens/Cart';
import { PaymentType } from './screens/PaymentType';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const Order = () => {
    return (
        <TopTab.Navigator initialRouteName="Processing">
            <TopTab.Screen
                name="Đang xử lý"
                component={Processing}
                headerTitle="Đang xử lý"
                options={{
                    // tabBarShowLabel:false,

                    tabBarActiveTintColor: '#e91e63',
                    tabBarStyle: { backgroundColor: 'white' },
                }}
            ></TopTab.Screen>
            <TopTab.Screen
                name="Hoàn thành"
                component={Complete}
                options={{
                    // tabBarShowLabel:false,
                    tabBarActiveTintColor: '#e91e63',
                    tabBarStyle: { backgroundColor: 'white' },
                }}
            ></TopTab.Screen>
        </TopTab.Navigator>
    );
};

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
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Main" component={BottomTabNavigation} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Search" options={{ headerTitle: 'Cấu hình đề nghị' }} component={Search}></Stack.Screen>
            <Stack.Screen name="GameScreen1" options={{ headerTitle: '' }} component={GameScreen1}></Stack.Screen>
            <Stack.Screen name="RenderScreen" options={{ headerTitle: 'Render video' }} component={RenderScreen}></Stack.Screen>
            <Stack.Screen name="Payment" options={{ headerTitle: 'Xác nhận thông tin giao hàng' }} component={Payment}></Stack.Screen>
            <Stack.Screen name="Detail" options={{ headerTitle: '' }} component={Detail}></Stack.Screen>
            <Stack.Screen name="Thanks" options={{ headerTitle: '' }} component={Thanks}></Stack.Screen>
            <Stack.Screen name="ShippingInfo" options={{ headerTitle: 'Thông tin giao hàng' }} component={ShippingInfo}></Stack.Screen>
            <Stack.Screen name="HistoryBuild" options={{ headerTitle: 'Lịch Sử build' }} component={HistoryBuild}></Stack.Screen>
            <Stack.Screen name="HisDetail" options={{ headerTitle: '' }} component={HisDetail}></Stack.Screen>
            <Stack.Screen name="Order" options={{ headerTitle: 'Đơn hàng' }} component={Order}></Stack.Screen>
            <Stack.Screen name="Cart" options={{ headerTitle: 'Chi tiết đơn hàng' }} component={Cart}></Stack.Screen>
            <Stack.Screen name="PaymentType" options={{ headerTitle: 'Thanh toán và giao hàng' }} component={PaymentType}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default AppNavigator;
