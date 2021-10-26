import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import Intl from 'intl';
export function PaymentType({ navigation, route }) {
    const { totalPrice } = route.params;
    const [ghtk, setghtk] = useState('#FFF');
    const [buudien, setbuudien] = useState('#FFF');
    const [ghn, setghn] = useState('#FFF');
    const [deliveryPrice, setdeliveryPrice] = useState(0);
    const [receive, setreceive] = useState('#FFF');
    const [momo, setmomo] = useState('#FFF');
    const [vnpay, setvnpay] = useState('#FFF');
    const [vtpay, setvtpay] = useState('#FFF');
    const [bank, setbank] = useState('#FFF');
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ padding: 10, backgroundColor: '#FFF', width: '95%', borderRadius: 10, alignItems: 'center', marginTop: 10 }}></View>
                <View style={{ padding: 10, backgroundColor: '#FFF', width: '95%', borderRadius: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>Chọn hình thức giao hàng</Text>
                    <TouchableOpacity
                        onPress={() => {
                            setghtk('#a5b2c7');
                            setbuudien('#FFF');
                            setghn('#FFF');
                            setdeliveryPrice('30000');
                        }}
                        style={{ flexDirection: 'row', width: '90%', marginTop: 10, backgroundColor: ghtk }}
                    >
                        <Image style={{ width: 50, height: 50 }} source={require('../assets/ghtk.png')}></Image>
                        <Text style={{ paddingVertical: 10, paddingHorizontal: 10, fontSize: 16 }}>Giao hàng tiết kiệm </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setghtk('#FFF');
                            setbuudien('#a5b2c7');
                            setghn('#FFF');
                            setdeliveryPrice('25000');
                        }}
                        style={{ flexDirection: 'row', width: '90%', marginTop: 10, backgroundColor: buudien }}
                    >
                        <Image style={{ width: 50, height: 50 }} source={require('../assets/buudien.jpg')}></Image>
                        <Text style={{ paddingVertical: 10, paddingHorizontal: 10, fontSize: 16 }}>Giao hàng bưu điện </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setghn('#a5b2c7');
                            setbuudien('#FFF');
                            setghtk('#FFF');
                            setdeliveryPrice('40000');
                        }}
                        style={{ flexDirection: 'row', width: '90%', marginTop: 10, backgroundColor: ghn }}
                    >
                        <Image style={{ width: 50, height: 50 }} source={require('../assets/GHN.jpg')}></Image>
                        <Text style={{ paddingVertical: 10, paddingHorizontal: 10, fontSize: 16 }}>Giao hàng nhanh </Text>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, fontSize: 16 }}>
                        Giá: <Text style={{ color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number.parseInt(deliveryPrice))}</Text>
                    </Text>
                </View>
                <View style={{ padding: 10, backgroundColor: '#FFF', width: '95%', borderRadius: 10, alignItems: 'center', marginTop: 20 }}></View>
                <View style={{ padding: 10, backgroundColor: '#FFF', width: '95%', borderRadius: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>Chọn hình thức thanh toán</Text>
                    <TouchableOpacity
                        onPress={() => {
                            setreceive('#a5b2c7');
                            setmomo('#FFF');
                            setvnpay('#FFF');
                            setvtpay('#FFF');
                            setbank('#FFF');
                        }}
                        style={{ flexDirection: 'row', width: '90%', marginTop: 10, backgroundColor: receive }}
                    >
                        <Image style={{ width: 50, height: 50 }} source={require('../assets/nhanhang.jpg')}></Image>
                        <Text style={{ paddingVertical: 10, paddingHorizontal: 10, fontSize: 16 }}>Thanh toán khi nhận hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setreceive('#FFF');
                            setmomo('#a5b2c7');
                            setvnpay('#FFF');
                            setvtpay('#FFF');
                            setbank('#FFF');
                        }}
                        style={{ flexDirection: 'row', width: '90%', marginTop: 10, backgroundColor: momo }}
                    >
                        <Image style={{ width: 50, height: 50 }} source={require('../assets/momo.jpg')}></Image>
                        <Text style={{ paddingVertical: 10, paddingHorizontal: 10, fontSize: 16 }}>Thanh toán bằng MoMo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setreceive('#FFF');
                            setmomo('#FFF');
                            setvnpay('#a5b2c7');
                            setvtpay('#FFF');
                            setbank('#FFF');
                        }}
                        style={{ flexDirection: 'row', width: '90%', marginTop: 10, backgroundColor: vnpay }}
                    >
                        <Image style={{ width: 50, height: 50 }} source={require('../assets/vnpay.png')}></Image>
                        <Text style={{ paddingVertical: 10, paddingHorizontal: 10, fontSize: 16 }}>Thanh toán bằng VNPay</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setreceive('#FFF');
                            setmomo('#FFF');
                            setvnpay('#FFF');
                            setvtpay('#a5b2c7');
                            setbank('#FFF');
                        }}
                        style={{ flexDirection: 'row', width: '90%', marginTop: 10, backgroundColor: vtpay }}
                    >
                        <Image style={{ width: 50, height: 50 }} source={require('../assets/vtpay.jpg')}></Image>
                        <Text style={{ paddingVertical: 10, paddingHorizontal: 10, fontSize: 16 }}>Thanh toán bằng ViettelPay</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setreceive('#FFF');
                            setmomo('#FFF');
                            setvnpay('#FFF');
                            setvtpay('#FFF');
                            setbank('#a5b2c7');
                        }}
                        style={{ flexDirection: 'row', width: '90%', marginTop: 10, backgroundColor: bank }}
                    >
                        <Image style={{ width: 50, height: 50 }} source={require('../assets/bank.jpg')}></Image>
                        <Text style={{ paddingVertical: 10, paddingHorizontal: 10, fontSize: 16 }}>Thanh toán bằng thẻ ngân hàng</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, backgroundColor: '#FFF', width: '95%', borderRadius: 10, alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 16 }}>
                        Giá sản phẩm: <Text style={{ color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}</Text>
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                        Phí giao hàng: <Text style={{ color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number.parseInt(deliveryPrice))}</Text>
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                        Tổng giá: <Text style={{ color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number.parseInt(totalPrice) + Number.parseInt(deliveryPrice))}</Text>
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Thanks')}>
                    <Text style={{ paddingHorizontal: 20, paddingVertical: 10, color: '#FFF', backgroundColor: 'tomato', borderRadius: 10, marginTop: 15, marginBottom: 30 }}>Thanh toán</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});
