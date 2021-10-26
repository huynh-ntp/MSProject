import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import Intl from 'intl';
export function Cart({ navigation, route }) {
    const { pc } = route.params;
    const { quantity } = route.params;
    var computer = pc;
    const [CPU, setCPU] = useState(computer.CPU);
    const [main, setMain] = useState(computer.main);
    const [VGA, setVGA] = useState(computer.VGA);
    const [PSU, setPSU] = useState(computer.PSU);
    const [ram, setRam] = useState(computer.ram);
    const [casePC, setcase] = useState(computer.case);
    const [hardDv, setHardDv] = useState(computer.hardDv);
    const [radiators, setRadiators] = useState(computer.radiators);
    const [totalPrice, setTotalPrice] = useState(CPU.price + main.price + VGA.price + PSU.price + ram.price + casePC.price + hardDv.price + radiators.price);
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={{ width: '98%', padding: 10, backgroundColor: '#FFF', marginTop: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '40%' }}>Sản phẩm</Text>
                        <Text style={{ width: '15%' }}>Đơn giá</Text>
                        <Text style={{ width: '20%' }}>Số lượng</Text>
                        <Text style={{ width: '25%' }}>Thành tiền</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <Image style={{ width: 50, height: 50 }} source={CPU.image}></Image>
                            <Text style={{ width: '60%' }}>{CPU.name}</Text>
                        </View>
                        <Text style={{ width: '25%' }}>{CPU.price}</Text>
                        <Text style={{ width: '10%' }}>{quantity}</Text>
                        <Text style={{ width: '25%' }}>{CPU.price * quantity}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <Image style={{ width: 50, height: 50 }} source={PSU.image}></Image>
                            <Text style={{ width: '60%' }}>{PSU.name}</Text>
                        </View>
                        <Text style={{ width: '25%' }}>{PSU.price}</Text>
                        <Text style={{ width: '10%' }}>{quantity}</Text>
                        <Text style={{ width: '25%' }}>{PSU.price * quantity}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <Image style={{ width: 50, height: 50 }} source={main.image}></Image>
                            <Text style={{ width: '60%' }}>{main.name}</Text>
                        </View>
                        <Text style={{ width: '25%' }}>{main.price}</Text>
                        <Text style={{ width: '10%' }}>{quantity}</Text>
                        <Text style={{ width: '25%' }}>{main.price * quantity}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <Image style={{ width: 50, height: 50 }} source={VGA.image}></Image>
                            <Text style={{ width: '60%' }}>{VGA.name}</Text>
                        </View>
                        <Text style={{ width: '25%' }}>{VGA.price}</Text>
                        <Text style={{ width: '10%' }}>{quantity}</Text>
                        <Text style={{ width: '25%' }}>{VGA.price * quantity}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <Image style={{ width: 50, height: 50 }} source={ram.image}></Image>
                            <Text style={{ width: '60%' }}>{ram.name}</Text>
                        </View>
                        <Text style={{ width: '25%' }}>{ram.price}</Text>
                        <Text style={{ width: '10%' }}>{quantity}</Text>
                        <Text style={{ width: '25%' }}>{ram.price * quantity}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <Image style={{ width: 50, height: 50 }} source={casePC.image}></Image>
                            <Text style={{ width: '60%' }}>{casePC.name}</Text>
                        </View>
                        <Text style={{ width: '25%' }}>{casePC.price}</Text>
                        <Text style={{ width: '10%' }}>{quantity}</Text>
                        <Text style={{ width: '25%' }}>{casePC.price * quantity}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <Image style={{ width: 50, height: 50 }} source={hardDv.image}></Image>
                            <Text style={{ width: '60%' }}>{hardDv.name}</Text>
                        </View>
                        <Text style={{ width: '25%' }}>{hardDv.price}</Text>
                        <Text style={{ width: '10%' }}>{quantity}</Text>
                        <Text style={{ width: '25%' }}>{hardDv.price * quantity}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <Image style={{ width: 50, height: 50 }} source={radiators.image}></Image>
                            <Text style={{ width: '60%' }}>{radiators.name}</Text>
                        </View>
                        <Text style={{ width: '25%' }}>{radiators.price}</Text>
                        <Text style={{ width: '10%' }}>{quantity}</Text>
                        <Text style={{ width: '25%' }}>{radiators.price * quantity}</Text>
                    </View>
                    <View style={{ marginTop: 10, alignItems: 'flex-end' }}>
                        <Text style={{ width: '50%', fontSize: 15 }}>
                            Tổng giá:
                            <Text style={{ color: 'red', marginLeft: 10 }}>{' ' + new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice * quantity)}</Text>
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Payment', {
                                totalPrice: totalPrice * quantity,
                            })
                        }
                        style={{ marginTop: 10, alignItems: 'flex-end', marginRight: 30 }}
                    >
                        <Text style={{ paddingHorizontal: 20, paddingVertical: 10, fontSize: 15, backgroundColor: 'tomato', borderRadius: 10, color: '#FFF' }}>Tiếp tục</Text>
                    </TouchableOpacity>
                </View>
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
