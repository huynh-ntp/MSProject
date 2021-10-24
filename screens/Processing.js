import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { useState } from 'react';
import { pc1, film2 } from '../components/ListAccessory';
export function Processing({ navigation }) {
    const pc = pc1;
    const pc2 = film2;
    const totalPrice = pc2.CPU.price + pc2.main.price + pc2.VGA.price + pc2.PSU.price + pc2.ram.price + pc2.case.price + pc2.hardDv.price + pc2.radiators.price;
    const totalStr = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice);
    const totalPrice2 = pc1.CPU.price + pc1.main.price + pc1.VGA.price + pc1.PSU.price + pc1.ram.price + pc1.case.price + pc1.hardDv.price + pc1.radiators.price;
    const totalStr2 = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice2);
    const [cancel, setcancel] = useState(false);
    const [modalVisible, setmodalVisible] = useState(false);
    const date = new Date();
    const strDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getUTCHours() + ':' + date.getUTCMinutes();
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={{ height: '100%', width: '40%' }}>
                    <Image style={{ width: '80%', height: 160, marginTop: 10, marginLeft: 10 }} source={pc.CPU.image} />
                </View>
                <View style={{ paddingVertical: 15, width: '60%' }}>
                    <Text style={styles.title}>
                        Mã đơn hàng: <Text style={styles.description}>{'PC0039'}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Địa chỉ: <Text style={styles.description}>143/45 Hẻm 11, Ba Đình, Hà Nội</Text>
                    </Text>
                    <Text style={styles.title}>
                        Số điện thoại: <Text style={styles.description}> {`094123456`}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Số lượng: <Text style={styles.description}>{'1'}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Ngày: <Text style={{ fontWeight: '100', color: '#000' }}>{strDate}</Text>
                    </Text>
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Tình trạng: {cancel ? <Text style={{ fontWeight: '100', color: 'red' }}>{'Đã hủy'}</Text> : <Text style={{ fontWeight: '100', color: 'blue' }}>{'Chờ xác nhận'}</Text>}</Text>
                    <Text style={styles.title}>
                        Giá: <Text style={{ fontWeight: '100', color: 'red' }}>{totalStr2}</Text>
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            if (!cancel) {
                                setmodalVisible(!modalVisible);
                            } else {
                                setcancel(!cancel);
                            }
                        }}
                    >
                        {cancel ? <Text style={styles.button}>Đặt lại</Text> : <Text style={styles.button}>Hủy đơn</Text>}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={{ height: '100%', width: '40%' }}>
                    <Image style={{ width: '80%', height: 160, marginTop: 10, marginLeft: 10 }} source={pc2.CPU.image} />
                </View>
                <View style={{ paddingVertical: 15, width: '60%' }}>
                    <Text style={styles.title}>
                        Mã đơn hàng: <Text style={styles.description}>{'PC0039'}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Địa chỉ: <Text style={styles.description}>143/45 Hẻm 11, Ba Đình, Hà Nội</Text>
                    </Text>
                    <Text style={styles.title}>
                        Số điện thoại: <Text style={styles.description}> {`094123456`}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Số lượng: <Text style={styles.description}>{'2'}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Ngày: <Text style={{ fontWeight: '100', color: '#000' }}>{'2021-10-17 15:59'}</Text>
                    </Text>
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>
                        Tình trạng: <Text style={{ fontWeight: '100', color: 'blue' }}>{'Đang giao'}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Giá: <Text style={{ fontWeight: '100', color: 'red' }}>{totalStr}</Text>
                    </Text>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('HisDetail', {
                                pc: pc2,
                            })
                        }
                    >
                        <Text style={styles.button}>Chi tiết máy</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 22 }}>
                    <View style={styles.modalView}>
                        <Text style={{ fontSize: 20, marginBottom: 20 }}>Tại sao bạn muốn hủy đơn ?</Text>
                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <Text style={{ marginTop: 10, marginRight: 20 }}>Lý do:</Text>
                            <TextInput style={{ color: '#FFF', width: 300, height: 40, paddingHorizontal: 10, paddingVertical: 7, backgroundColor: 'gray', borderRadius: 20 }}></TextInput>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                setcancel(!cancel);
                                setmodalVisible(!modalVisible);
                            }}
                        >
                            <Text
                                style={{
                                    backgroundColor: 'green',
                                    paddingVertical: 7,
                                    paddingHorizontal: 10,
                                    width: 120,
                                    textAlign: 'center',
                                    borderRadius: 50,
                                    marginTop: 10,
                                    color: '#FFF',
                                }}
                            >
                                Xác nhận
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        padding: 50,
    },
});
