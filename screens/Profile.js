import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center', marginTop: -100 }}>
                    <Image source={require('../assets/avata.jpg')} style={{ width: 80, height: 80, borderRadius: 40 }}></Image>
                    <Text style={{ fontSize: 16, marginBottom: 30 }}>Lee Min Hoo</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: '70%', height: 1, backgroundColor: '#000' }}></View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ShippingInfo')} style={{ flexDirection: 'row', padding: 10 }}>
                    <Image source={require('../assets/home-address.png')} style={{ width: 60, height: 60, borderRadius: 40 }}></Image>
                    <Text style={{ padding: 10, fontWeight: 'bold' }}>Cập nhật thông tin giao hàng</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: '70%', height: 1, backgroundColor: '#000' }}></View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Order')} style={{ flexDirection: 'row', padding: 10 }}>
                    <Image source={require('../assets/order.png')} style={{ width: 60, height: 60, borderRadius: 40 }}></Image>
                    <Text style={{ padding: 10, fontWeight: 'bold' }}>Đơn hàng</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: '70%', height: 1, backgroundColor: '#000' }}></View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ flexDirection: 'row', padding: 10 }}>
                    <Image source={require('../assets/logout.png')} style={{ width: 60, height: 60, borderRadius: 40 }}></Image>
                    <Text style={{ padding: 10, fontWeight: 'bold' }}>Đăng xuất</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: '70%', height: 1, backgroundColor: '#000' }}></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },
});
