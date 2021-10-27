import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput, Alert, ScrollView, Picker } from 'react-native';
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
    const [selectReseason, setselectReseason] = useState('1');
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={{ height: '100%', width: '40%' }}>
                        <Image style={{ width: '80%', height: 160, marginTop: 10, marginLeft: 10 }} source={require('../assets/pcicon.jpg')} />
                    </View>
                    <View style={{ paddingVertical: 15, width: '60%' }}>
                        <Text style={styles.title}>
                            Mã đơn hàng: <Text style={styles.description}>{'PC0039'}</Text>
                        </Text>
                        <Text style={styles.title}>
                            Tên: <Text style={styles.description}> Nguyên Khôi</Text>
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
                            Phương thức thanh toán: <Text style={styles.description}> {`Khi nhận hàng`}</Text>
                        </Text>

                        <Text style={styles.title}>
                            Ngày: <Text style={{ fontWeight: '100', color: '#000' }}>{strDate}</Text>
                        </Text>
                        <Text style={styles.title}>
                            Phí giao hàng: <Text style={styles.description}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(30000)}</Text>
                        </Text>
                        <Text style={styles.title}>
                            Giá sản phẩm: <Text style={styles.description}>{totalStr2}</Text>
                        </Text>
                        <Text style={styles.title}>
                            Tổng cộng: <Text style={{ fontWeight: '100', color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(30000 + totalPrice2)}</Text>
                        </Text>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>Tình trạng: {cancel ? <Text style={{ fontWeight: '100', color: 'red' }}>{'Đã hủy'}</Text> : <Text style={{ fontWeight: '100', color: 'blue' }}>{'Chờ xác nhận'}</Text>}</Text>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('HisDetail', {
                                    pc: pc,
                                })
                            }
                        >
                            <Text style={styles.button}>Chi tiết máy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                if (!cancel) {
                                    setmodalVisible(!modalVisible);
                                } else {
                                    setcancel(!cancel);
                                    Alert.alert('Đặt lại thành công');
                                }
                            }}
                        >
                            {cancel ? <Text style={styles.button}>Đặt lại</Text> : <Text style={styles.button}>Hủy đơn</Text>}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={{ height: '100%', width: '40%' }}>
                        <Image style={{ width: '80%', height: 160, marginTop: 10, marginLeft: 10 }} source={require('../assets/pcicon.jpg')} />
                    </View>
                    <View style={{ paddingVertical: 15, width: '60%' }}>
                        <Text style={styles.title}>
                            Mã đơn hàng: <Text style={styles.description}>{'PC0154'}</Text>
                        </Text>
                        <Text style={styles.title}>
                            Tên: <Text style={styles.description}>Trần Nguyên Khôi</Text>
                        </Text>
                        <Text style={styles.title}>
                            Địa chỉ: <Text style={styles.description}>143/45 Hẻm 11, Ba Đình, Hà Nội</Text>
                        </Text>
                        <Text style={styles.title}>
                            Số điện thoại: <Text style={styles.description}> {`094123456`}</Text>
                        </Text>
                        <Text style={styles.title}>
                            Phương thức giao hàng: <Text style={styles.description}> {`Giao hàng nhanh`}</Text>
                        </Text>
                        <Text style={styles.title}>
                            Phương thức thanh toán: <Text style={styles.description}> {`Ví momo`}</Text>
                        </Text>
                        <Text style={styles.title}>
                            Ngày: <Text style={{ fontWeight: '100', color: '#000' }}>{'2021-10-17 15:59'}</Text>
                        </Text>
                        <Text style={styles.title}>
                            Phí giao hàng: <Text style={styles.description}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(40000)}</Text>
                        </Text>
                        <Text style={styles.title}>
                            Giá sản phẩm: <Text style={styles.description}>{totalStr}</Text>
                        </Text>
                        <Text style={styles.title}>
                            Tổng cộng: <Text style={{ fontWeight: '100', color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(40000 + totalPrice)}</Text>
                        </Text>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>
                            Tình trạng: <Text style={{ fontWeight: '100', color: 'blue' }}>{'Đang giao'}</Text>
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
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>Lý do hủy đơn hàng PC0039</Text>
                            <View style={{ width: '100%', flexDirection: 'row', marginBottom: 10 }}>
                                <Text style={{ marginTop: 10, marginRight: 20, width: '30%' }}>Lý do:</Text>
                                <Picker onValueChange={(value, index) => setselectReseason(value)} selectedValue={selectReseason} style={{ height: 40, width: '110%' }}>
                                    <Picker.Item value="1" label={'Chọn lý do'}></Picker.Item>
                                    <Picker.Item value="2" label={'Đặt nhầm'}></Picker.Item>
                                    <Picker.Item value="3" label={'Sai thông tin giao hàng'}></Picker.Item>
                                    <Picker.Item value="3" label={'Phương thức thanh toán quá rắc rối'}></Picker.Item>
                                    <Picker.Item value="4" label={'Đổi ý,không muốn mua nữa'}></Picker.Item>
                                    <Picker.Item value="5" label={'Khác'}></Picker.Item>
                                </Picker>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row' }}>
                                <Text style={{ marginTop: 10, marginRight: 20 }}>Chi tiết:</Text>
                                <TextInput style={{ color: '#FFF', width: 300, height: 40, paddingHorizontal: 10, paddingVertical: 7, backgroundColor: 'gray', borderRadius: 20 }}></TextInput>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    setcancel(!cancel);
                                    setmodalVisible(!modalVisible);
                                    Alert.alert('Hủy thành công');
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    box: {
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
        borderRadius: 20,
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
