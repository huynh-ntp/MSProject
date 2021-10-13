import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
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
        <SafeAreaView style={{ alignItems: 'center', backgroundColor: '#92DDD0', flex: 1 }}>
            <TouchableOpacity activeOpacity="0.5" style={styles.touchAble} onPress={() => changeAccessory()}>
                <View style={{ width: '40%', height: '100%' }}>
                    <Image source={image} style={{ width: '100%', height: '80%', marginTop: '10%' }} />
                </View>
                <View style={{ width: '55%', height: '100%', marginTop: '10%', marginLeft: 10 }}>
                    <Text style={styles.title}>
                        Name: <Text style={styles.description}>{name}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Description: <Text style={styles.description}>{description}</Text>
                    </Text>
                    <Text style={styles.title}>
                        Price: <Text style={styles.description}>{price} VND </Text>
                    </Text>
                </View>
            </TouchableOpacity>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 200, marginTop: 30 }}>
                <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(CPU, 'CPU')}>
                    <Image source={CPU.image} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(main, 'main')}>
                    <Image source={main.image} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(VGA, 'VGA')}>
                    <Image source={VGA.image} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(PSU, 'PSU')}>
                    <Image source={PSU.image} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(ram, 'ram')}>
                    <Image source={ram.image} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(casePC, 'casePC')}>
                    <Image source={casePC.image} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(hardDv, 'hardDv')}>
                    <Image source={hardDv.image} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchAble2} onPress={() => touchChangeDetail(radiators, 'radiators')}>
                    <Image source={radiators.image} style={styles.image} />
                </TouchableOpacity>
            </ScrollView>
            <View style={{ width: '100%', height: 180, alignItems: 'flex-end' }}>
                <Text style={{ fontWeight: 'bold', marginEnd: 20 }}>Total price: {totalPrice} VND</Text>
                <TouchableOpacity style={{ marginEnd: 20, marginTop: 10 }}>
                    <Text style={styles.button}>Purchase</Text>
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
                                        Name: <Text style={styles.description}>{access.name}</Text>
                                    </Text>
                                    <Text style={styles.title}>
                                        Description: <Text style={styles.description}>{access.description}</Text>
                                    </Text>
                                    <Text style={styles.title}>
                                        Price: <Text style={styles.description}>{access.price} VND </Text>
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    touchAble: {
        width: '90%',
        height: 200,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        borderRadius: 30,
    },
    title: {
        fontWeight: 'bold',
    },
    description: {
        fontWeight: '100',
    },
    image: {
        width: 200,
        height: 200,
        marginLeft: 20,
        marginRight: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    touchAble2: { height: 200, backgroundColor: '#FFF', borderRadius: 20, marginLeft: 20 },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#909DD1',
        borderRadius: 20,
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
});