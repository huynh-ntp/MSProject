import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Intl from 'intl';
import 'intl/locale-data/jsonp/vi';
import { CPUList, VGAList, mainList, PSUList } from '../components/ListAccessory';
export function Detail({ navigation, route }) {
    const { pc } = route.params;
    var computer = pc.pc;
    const [modalVisible, setModalVisible] = useState(false);
    const [CPU, setCPU] = useState(computer.CPU);
    const [main, setMain] = useState(computer.main);
    const [VGA, setVGA] = useState(computer.VGA);
    const [PSU, setPSU] = useState(computer.PSU);
    const [ram, setRam] = useState(computer.ram);
    const [casePC, setcase] = useState(computer.case);
    const [hardDv, setHardDv] = useState(computer.hardDv);
    const [radiators, setRadiators] = useState(computer.radiators);
    const [name, setName] = useState(CPU.name);
    const [image, setImage] = useState(CPU.image);
    const [description, setDescription] = useState(CPU.description);
    const [price, setPrice] = useState(CPU.price);
    const [totalPrice, setTotalPrice] = useState(CPU.price + main.price + VGA.price + PSU.price + ram.price + casePC.price + hardDv.price + radiators.price);
    const [mainInfo, setMainInfo] = useState('CPU');
    const [listChange, setListChange] = useState(CPUList);
    const touchChangeDetail = (access, type) => {
        setName(access.name);
        setImage(access.image);
        setDescription(access.description);
        setPrice(access.price);
        setMainInfo(type);
    };
    const changeAccessory = () => {
        switch (mainInfo) {
            case 'CPU':
                setListChange(CPUList);
                break;
            case 'PSU':
                setListChange(PSUList);
                break;
            case 'main':
                setListChange(mainList);
                break;
            case 'VGA':
                setListChange(VGAList);
                break;
        }
        setModalVisible(true);
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
            <View style={{ alignItems: 'center', backgroundColor: '#92DDD0', flex: 1, marginTop: 20 }}>
                <View style={{ width: '95%', height: 'auto', padding: 20, backgroundColor: '#FFF', borderRadius: 20, marginBottom: 30 }}>
                    <Text style={{ marginLeft: '40%', fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>Tổng quan</Text>
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
                            <Text style={styles.title}>
                                Tên: <Text style={styles.description}>{CPU.name}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Mô tả: <Text style={styles.description}>{CPU.description}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Giá: <Text style={{ fontWeight: '100', color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(CPU.price)} </Text>
                            </Text>
                            {/* <Text style={styles.buttonChange}>Click để đổi linh kiện</Text> */}
                        </View>
                    </View>
                    <View style={styles.touchAble}>
                        <View style={{ width: '40%', height: '100%', borderRadius: 30 }}>
                            <Image source={main.image} style={{ width: '100%', height: '80%', marginTop: '10%', borderRadius: 30 }} />
                        </View>
                        <View style={{ width: '55%', height: '100%', marginTop: '10%', marginLeft: 10 }}>
                            <Text style={styles.title}>
                                Tên: <Text style={styles.description}>{main.name}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Mô tả: <Text style={styles.description}>{main.description}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Giá: <Text style={{ fontWeight: '100', color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(main.price)} </Text>
                            </Text>
                            {/* <Text style={styles.buttonChange}>Click để đổi linh kiện</Text> */}
                        </View>
                    </View>
                    <View style={styles.touchAble}>
                        <View style={{ width: '40%', height: '100%', borderRadius: 30 }}>
                            <Image source={VGA.image} style={{ width: '100%', height: '80%', marginTop: '10%', borderRadius: 30 }} />
                        </View>
                        <View style={{ width: '55%', height: '100%', marginTop: '10%', marginLeft: 10 }}>
                            <Text style={styles.title}>
                                Tên: <Text style={styles.description}>{VGA.name}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Mô tả: <Text style={styles.description}>{VGA.description}</Text>
                            </Text>
                            <Text style={styles.title}>
                                Giá: <Text style={{ fontWeight: '100', color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(VGA.price)} </Text>
                            </Text>
                            {/* <Text style={styles.buttonChange}>Click để đổi linh kiện</Text> */}
                        </View>
                    </View>
                </ScrollView>
                {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 200, marginTop: 30 }}>
                    <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(CPU, 'CPU')}>
                        <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 5 }}>CPU</Text>
                        <Image source={CPU.image} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(main, 'main')}>
                        <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 5 }}>Main board</Text>
                        <Image source={main.image} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(VGA, 'VGA')}>
                        <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 5 }}>Card màn hình</Text>
                        <Image source={VGA.image} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(PSU, 'PSU')}>
                        <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 5 }}>Nguồn</Text>
                        <Image source={PSU.image} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(ram, 'ram')}>
                        <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 5 }}>Ram</Text>
                        <Image source={ram.image} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(casePC, 'casePC')}>
                        <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 5 }}>Case</Text>
                        <Image source={casePC.image} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(hardDv, 'hardDv')}>
                        <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 5 }}>Ổ cứng</Text>
                        <Image source={hardDv.image} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(radiators, 'radiators')}>
                        <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 5 }}>Tản nhiệt</Text>
                        <Image source={radiators.image} style={styles.image} />
                    </TouchableOpacity>
                </ScrollView> */}
                <View style={{ width: '100%', height: 180, alignItems: 'flex-end', paddingTop: 20 }}>
                    <Text style={{ fontWeight: 'bold', marginEnd: 20 }}>
                        Tổng giá: <Text style={{ color: 'red' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}</Text>{' '}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Payment');
                        }}
                        style={{ marginEnd: 20, marginTop: 10 }}
                    >
                        <Text style={styles.button}>Đi đến giao hàng</Text>
                    </TouchableOpacity>
                </View>
                <Modal style={styles.modal} transparent visible={modalVisible} animationType="slide">
                    <View style={styles.modal}>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={{ alignItems: 'flex-end', paddingBottom: 10 }}>
                            <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                        <ScrollView>
                            {listChange.map((access) => (
                                <TouchableOpacity key={access.price} activeOpacity="0.5" style={styles.touchAble3} onPress={() => handleChangeAccessory(access)}>
                                    <View style={{ width: '40%', height: '100%' }}>
                                        <Image source={access.image} style={{ width: '80%', height: '80%', marginTop: '10%' }} />
                                    </View>
                                    <View style={{ width: '60%', height: '100%', marginTop: '5%' }}>
                                        <Text style={styles.title}>
                                            Tên: <Text style={styles.description}>{access.name}</Text>
                                        </Text>
                                        <Text style={styles.title}>
                                            Mô tả: <Text style={styles.description}>{access.description}</Text>
                                        </Text>
                                        <Text style={styles.title}>
                                            Giá: <Text style={styles.description}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(access.price)} </Text>
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </Modal>
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
        backgroundColor: '#909DD1',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 21,
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
