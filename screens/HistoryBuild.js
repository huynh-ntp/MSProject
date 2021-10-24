import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { film1 } from '../components/ListAccessory';
import { useState } from 'react';
import { pc1 } from '../components/ListAccessory';
export default HistoryBuild = ({ navigation }) => {
    const pc = film1;
    const totalPrice = pc.CPU.price + pc.main.price + pc.VGA.price + pc.PSU.price + pc.ram.price + pc.case.price + pc.hardDv.price + pc.radiators.price;
    const totalStr = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice);
    const totalPrice2 = pc1.CPU.price + pc1.main.price + pc1.VGA.price + pc1.PSU.price + pc1.ram.price + pc1.case.price + pc1.hardDv.price + pc1.radiators.price;
    const totalStr2 = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice2);
    const pc2 = pc1;
    const [cancel, setcancel] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.box}>
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
                        Ngày: <Text style={{ fontWeight: '100', color: '#000' }}>{'2021-10-17 15:59'}</Text>
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
                        <Text style={styles.button}>Chi tiết</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={{ height: '100%', width: '40%' }}>
                    <Image style={{ width: '80%', height: 160, marginTop: 10, marginLeft: 10 }} source={pc1.CPU.image} />
                </View>
                <View style={{ paddingVertical: 15, width: '60%' }}>
                    <Text style={styles.title}>
                        CPU: <Text style={styles.description}>{pc2.CPU.name}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Mainboard: <Text style={styles.description}>{pc2.main.name}</Text>
                    </Text>
                    <Text style={styles.title}>
                        VGA: <Text style={styles.description}> {pc2.VGA.name}</Text>
                    </Text>
                    <Text style={styles.title}>
                        PSU: <Text style={styles.description}>{pc2.PSU.name}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Ngày: <Text style={{ fontWeight: '100', color: '#000' }}>{'2021-10-17 15:59'}</Text>
                    </Text>
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Tình trạng: {cancel ? <Text style={{ fontWeight: '100', color: 'red' }}>{'Đã hủy'}</Text> : <Text style={{ fontWeight: '100', color: 'blue' }}>{'Chờ xác nhận'}</Text>}</Text>
                    <Text style={styles.title}>
                        Giá: <Text style={{ fontWeight: '100', color: 'red' }}>{totalStr2}</Text>
                    </Text>
                    <TouchableOpacity onPress={() => setcancel(!cancel)}>{cancel ? <Text style={styles.button}>Đặt lại</Text> : <Text style={styles.button}>Hủy đơn</Text>}</TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

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
        width: 90,
        textAlign: 'center',
        borderRadius: 50,
        marginLeft: 100,
        marginTop: 10,
        color: '#FFF',
    },
});
