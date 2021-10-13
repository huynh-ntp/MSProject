import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Intl from 'intl';
import 'intl/locale-data/jsonp/vi';
export default class Computer extends Component {
    render() {
        const { pc, detail } = this.props;
        const totalPrice = pc.CPU.price + pc.main.price + pc.VGA.price + pc.PSU.price + pc.ram.price + pc.case.price + pc.hardDv.price + pc.radiators.price;
        const totalStr = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice);
        return (
            <TouchableOpacity onPress={detail} style={styles.container} activeOpacity="0.6">
                <View style={{ height: '100%', width: '40%' }}>
                    <Image style={{ width: '80%', height: 160, marginTop: 10, marginLeft: 10 }} source={pc.CPU.image} />
                </View>
                <View style={{ paddingVertical: 15, width: '60%' }}>
                    <Text style={styles.title}>
                        CPU: <Text style={styles.description}>{pc.CPU.name}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Mainboard: <Text style={styles.description}>{pc.main.name}</Text>
                    </Text>
                    <Text style={styles.title}>
                        VGA: <Text style={styles.description}> {pc.VGA.name}</Text>
                    </Text>
                    <Text style={styles.title}>
                        PSU: <Text style={styles.description}>{pc.PSU.name}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Giá: <Text style={styles.description}>{totalStr}</Text>
                    </Text>
                    <Text style={styles.button}>Detail</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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
        width: 90,
        textAlign: 'center',
        borderRadius: 50,
        marginLeft: 50,
        marginTop: 10,
    },
});
