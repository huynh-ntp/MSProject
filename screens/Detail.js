import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useState } from 'react';
import Intl from 'intl';
import 'intl/locale-data/jsonp/vi';
import { CPUList, VGAList, mainList, PSUList } from '../components/ListAccessory';
export function Detail({ navigation, route }) {
    const { pc } = route.params;
    var computer = pc.pc;
    const [CPU, setCPU] = useState(computer.CPU);
    const [main, setMain] = useState(computer.main);
    const [VGA, setVGA] = useState(computer.VGA);
    const [PSU, setPSU] = useState(computer.PSU);
    const [ram, setRam] = useState(computer.ram);
    const [casePC, setcase] = useState(computer.case);
    const [hardDv, setHardDv] = useState(computer.hardDv);
    const [radiators, setRadiators] = useState(computer.radiators);
    const [totalPrice, setTotalPrice] = useState(CPU.price + main.price + VGA.price + PSU.price + ram.price + casePC.price + hardDv.price + radiators.price);
    const [mainInfo, setMainInfo] = useState('CPU');
    const [quantity, setquantity] = useState(1);
    const [priceShow, setPriceShow] = useState(totalPrice);
    const touchChangeDetail = (access, type) => {
        setName(access.name);
        setImage(access.image);
        setDescription(access.description);
        setPrice(access.price);
        setMainInfo(type);
    };

    const handleChangeAccessory = (access) => {
        setName(access.name);
        setImage(access.image);
        setDescription(access.description);
        setPrice(access.price);
        switch (mainInfo) {
            case 'CPU':
                setTotalPrice(totalPrice - CPU.price + access.price);
                setCPU(access);
                break;
            case 'PSU':
                setTotalPrice(totalPrice - PSU.price + access.price);
                setPSU(access);
                break;
            case 'main':
                setTotalPrice(totalPrice - main.price + access.price);
                setMain(access);
                break;
            case 'VGA':
                setTotalPrice(totalPrice - VGA.price + access.price);
                setVGA(access);
                break;
        }
        setModalVisible(false);
    };

    return (
        <ScrollView style={{ backgroundColor: '#92DDD0' }}>
            <View style={{ alignItems: 'center', backgroundColor: '#92DDD0', flex: 1, marginTop: 2 }}>
                <View style={{ width: '95%', height: 'auto', padding: 20, backgroundColor: '#FFF', borderRadius: 20, marginBottom: 30 }}>
                    <Text style={{ marginLeft: '30%', fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>Tổng quan bộ máy</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '30%', fontWeight: 'bold' }}>CPU:</Text>
                        <Text style={{ width: '70%' }}>{CPU.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '30%', fontWeight: 'bold' }}>Mainboard:</Text>
                        <Text style={{ width: '70%' }}>{main.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '30%', fontWeight: 'bold' }}>VGA:</Text>
                        <Text style={{ width: '70%' }}>{VGA.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '30%', fontWeight: 'bold' }}>Nguồn:</Text>
                        <Text style={{ width: '70%' }}>{PSU.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '30%', fontWeight: 'bold' }}>Ram:</Text>
                        <Text style={{ width: '70%' }}>{ram.description}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '30%', fontWeight: 'bold' }}>Case:</Text>
                        <Text style={{ width: '70%' }}>{casePC.description}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '30%', fontWeight: 'bold' }}>Ổ cứng:</Text>
                        <Text style={{ width: '70%' }}>{hardDv.description}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '30%', fontWeight: 'bold' }}>Tản nhiệt:</Text>
                        <Text style={{ width: '70%' }}>{radiators.description}</Text>
                    </View>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ height: 200 }}>
                    <View style={styles.touchAble}>
                        <View style={{ width: '40%', height: '100%', borderRadius: 30 }}>
                            <Image source={CPU.image} style={{ width: '100%', height: '80%', marginTop: '10%', borderRadius: 30 }} />
                        </View>
                        <View style={{ width: '55%', height: '100%', marginTop: '10%', marginLeft: 10 }}>
                            <Text style={{ color: 'blue', fontSize: 18 }}>CPU</Text>
                            <Text style={styles.title}>
                                Tên: <Text style={styles.description}>{CPU.name}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Mô tả: <Text style={styles.description}>{CPU.description}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Giá: <Text style={{ fontWeight: '100', color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(CPU.price)} </Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.touchAble}>
                        <View style={{ width: '40%', height: '100%', borderRadius: 30 }}>
                            <Image source={main.image} style={{ width: '100%', height: '80%', marginTop: '10%', borderRadius: 30 }} />
                        </View>
                        <View style={{ width: '55%', height: '100%', marginTop: '10%', marginLeft: 10 }}>
                            <Text style={{ color: 'blue', fontSize: 18 }}>Mainboard</Text>
                            <Text style={styles.title}>
                                Tên: <Text style={styles.description}>{main.name}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Mô tả: <Text style={styles.description}>{main.description}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Giá: <Text style={{ fontWeight: '100', color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(main.price)} </Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.touchAble}>
                        <View style={{ width: '40%', height: '100%', borderRadius: 30 }}>
                            <Image source={VGA.image} style={{ width: '100%', height: '80%', marginTop: '10%', borderRadius: 30 }} />
                        </View>
                        <View style={{ width: '55%', height: '100%', marginTop: '10%', marginLeft: 10 }}>
                            <Text style={{ color: 'blue', fontSize: 18 }}>Card</Text>
                            <Text style={styles.title}>
                                Tên: <Text style={styles.description}>{VGA.name}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Mô tả: <Text style={styles.description}>{VGA.description}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Giá: <Text style={{ fontWeight: '100', color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(VGA.price)} </Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.touchAble}>
                        <View style={{ width: '40%', height: '100%', borderRadius: 30 }}>
                            <Image source={PSU.image} style={{ width: '100%', height: '80%', marginTop: '10%', borderRadius: 30 }} />
                        </View>
                        <View style={{ width: '55%', height: '100%', marginTop: '10%', marginLeft: 10 }}>
                            <Text style={{ color: 'blue', fontSize: 18 }}>PSU</Text>
                            <Text style={styles.title}>
                                Tên: <Text style={styles.description}>{PSU.name}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Mô tả: <Text style={styles.description}>{PSU.description}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Giá: <Text style={{ fontWeight: '100', color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(PSU.price)} </Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.touchAble}>
                        <View style={{ width: '40%', height: '100%', borderRadius: 30 }}>
                            <Image source={ram.image} style={{ width: '100%', height: '80%', marginTop: '10%', borderRadius: 30 }} />
                        </View>
                        <View style={{ width: '55%', height: '100%', marginTop: '10%', marginLeft: 10 }}>
                            <Text style={{ color: 'blue', fontSize: 18 }}>Ram</Text>
                            <Text style={styles.title}>
                                Tên: <Text style={styles.description}>{ram.name}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Mô tả: <Text style={styles.description}>{ram.description}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Giá: <Text style={{ fontWeight: '100', color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(ram.price)} </Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.touchAble}>
                        <View style={{ width: '40%', height: '100%', borderRadius: 30 }}>
                            <Image source={casePC.image} style={{ width: '100%', height: '80%', marginTop: '10%', borderRadius: 30 }} />
                        </View>
                        <View style={{ width: '55%', height: '100%', marginTop: '10%', marginLeft: 10 }}>
                            <Text style={{ color: 'blue', fontSize: 18 }}>Case</Text>
                            <Text style={styles.title}>
                                Tên: <Text style={styles.description}>{casePC.name}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Mô tả: <Text style={styles.description}>{casePC.description}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Giá: <Text style={{ fontWeight: '100', color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(casePC.price)} </Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.touchAble}>
                        <View style={{ width: '40%', height: '100%', borderRadius: 30 }}>
                            <Image source={hardDv.image} style={{ width: '100%', height: '80%', marginTop: '10%', borderRadius: 30 }} />
                        </View>
                        <View style={{ width: '55%', height: '100%', marginTop: '10%', marginLeft: 10 }}>
                            <Text style={{ color: 'blue', fontSize: 18 }}>Ổ cứng</Text>
                            <Text style={styles.title}>
                                Tên: <Text style={styles.description}>{hardDv.name}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Mô tả: <Text style={styles.description}>{hardDv.description}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Giá: <Text style={{ fontWeight: '100', color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(hardDv.price)} </Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.touchAble}>
                        <View style={{ width: '40%', height: '100%', borderRadius: 30 }}>
                            <Image source={radiators.image} style={{ width: '100%', height: '80%', marginTop: '10%', borderRadius: 30 }} />
                        </View>
                        <View style={{ width: '55%', height: '100%', marginTop: '10%', marginLeft: 10 }}>
                            <Text style={{ color: 'blue', fontSize: 18 }}>Tản nhiệt</Text>
                            <Text style={styles.title}>
                                Tên: <Text style={styles.description}>{radiators.name}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Mô tả: <Text style={styles.description}>{radiators.description}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Giá: <Text style={{ fontWeight: '100', color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(radiators.price)} </Text>
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ marginTop: 20, flexDirection: 'row', marginLeft: 130 }}>
                    <Text style={{ fontSize: 20, marginRight: 20, marginTop: 5 }}>Số lượng:</Text>
                    <TouchableOpacity
                        onPress={() => {
                            if (quantity > 1) {
                                let q = quantity;
                                setquantity(q - 1);
                                setPriceShow(totalPrice * (q - 1));
                            }
                        }}
                    >
                        <Image source={require('../assets/subtracting-button.png')} style={{ width: 40, height: 40 }}></Image>
                    </TouchableOpacity>
                    <TextInput
                        value={`${quantity}`}
                        onChangeText={(value) => {
                            if (!isNaN(value)) {
                                if (value >= 1) {
                                    setquantity(value);
                                    setPriceShow(value * totalPrice);
                                }
                            }
                        }}
                        style={{ width: 40, height: 40, padding: 10, backgroundColor: '#FFF', borderRadius: 10, fontSize: 16 }}
                    ></TextInput>
                    <TouchableOpacity
                        onPress={() => {
                            let q = quantity;
                            setquantity(q + 1);
                            setPriceShow((q + 1) * totalPrice);
                        }}
                    >
                        <Image source={require('../assets/plus.png')} style={{ width: 40, height: 40 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 180, alignItems: 'flex-end', paddingTop: 20 }}>
                    <Text style={{ fontWeight: 'bold', marginEnd: 20 }}>
                        Tổng giá: <Text style={{ color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(priceShow)}</Text>{' '}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Payment');
                        }}
                        style={{ marginEnd: 20, marginTop: 10 }}
                    >
                        <Text style={styles.button}>Đi đến thanh toán</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    touchAble: {
        width: 320,
        height: 200,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 21,
        marginRight: 30,
    },
    title: {
        fontWeight: 'bold',
    },
    description: {
        fontWeight: '100',
    },
    image: {
        width: 170,
        height: 170,
        marginLeft: 20,
        marginRight: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    touchAble2: {
        height: 200,
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginLeft: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 21,
        alignItems: 'flex-start',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'green',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 21,
        color: '#FFF',
    },
    modal: {
        flex: 1,
        backgroundColor: '#92DDD0',
    },

    closeButton: {
        marginEnd: 10,
        marginTop: 10,
        fontWeight: 'bold',
        borderRadius: 20,
        backgroundColor: '#FF9B70',
        paddingVertical: 5,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 21,
    },
    touchAble3: {
        width: '90%',
        height: 130,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 20,
    },
    buttonChange: {
        fontStyle: 'italic',
        padding: 10,
        color: 'red',
    },
});
