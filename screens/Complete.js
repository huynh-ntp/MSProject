import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Intl from 'intl';
import { film1 } from '../components/ListAccessory';
import { useState } from 'react';
export function Complete({ navigation }) {
    const pc = film1;
    const totalPrice = pc.CPU.price + pc.main.price + pc.VGA.price + pc.PSU.price + pc.ram.price + pc.case.price + pc.hardDv.price + pc.radiators.price;
    const totalStr = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice);

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={{ height: '100%', width: '40%' }}>
                    <Image style={{ width: '80%', height: 160, marginTop: 10, marginLeft: 10 }} source={require('../assets/pcicon.jpg')} />
                </View>
                <View style={{ paddingVertical: 15, width: '60%' }}>
                    <Text style={styles.title}>
                        Mã đơn hàng: <Text style={styles.description}>{'PC0019'}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Địa chỉ: <Text style={styles.description}>143/45 Hẻm 11, Ba Đình, Hà Nội</Text>
                    </Text>
                    <Text style={styles.title}>
                        Số điện thoại: <Text style={styles.description}> {`094123456`}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Phương thức giao hàng: <Text style={styles.description}> {`Giao hàng tiết kiệm`}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Phương thức thanh toán: <Text style={styles.description}> {`ViettelPay`}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Ngày đặt: <Text style={{ fontWeight: '100', color: '#000' }}>{'2021-10-17 15:59'}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Số lượng: <Text style={styles.description}> {`1`}</Text>
                    </Text>
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>
                        Tình trạng: <Text style={{ fontWeight: '100', color: 'green' }}>{'Đã giao'}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Giá: <Text style={{ fontWeight: '100', color: 'red' }}>{totalStr}</Text>
                    </Text>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('HisDetail', {
                                pc: pc,
                            })
                        }
                    >
                        <Text style={styles.button}>Chi tiết máy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    box: {
        height: 'auto',
        backgroundColor: '#FFF',
        borderRadius: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 21,
        marginTop: 30,
    },
    title: {
        fontWeight: 'bold',
    },
    description: {
        fontWeight: '100',
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 7,
        paddingHorizontal: 10,
        width: 120,
        textAlign: 'center',
        borderRadius: 50,
        marginLeft: 60,
        marginTop: 10,
        color: '#FFF',
    },
});
