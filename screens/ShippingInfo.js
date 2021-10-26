import React from 'react';
import { View, Text, TextInput, StyleSheet, Picker, TouchableOpacity, Image, Alert } from 'react-native';
import { useEffect, useState } from 'react';
export function ShippingInfo() {
    const [provinces, setprovinces] = useState([]);
    const [districts, setdistricts] = useState([]);
    const [wards, setwards] = useState([]);
    const [province, setprovince] = useState('');
    const [district, setdistrict] = useState('');
    const [ward, setward] = useState('');
    const changeProvince = (value) => {
        setprovince(value);
        setdistricts(provinces[value].districts);
        setwards(districts[0].wards);
    };

    const changeDistrict = (value) => {
        setdistrict(value);
        setwards(districts[value].wards);
    };
    const [phone, setphone] = useState('094123456');
    const [address, setaddress] = useState('143/45 Hẻm 11');
    const [name, setname] = useState('Tran Nguyen Khoi');
    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/?depth=3')
            .then((response) => response.json())
            .then((data) => {
                let p = data;
                //  let p1 = p[0];
                //  p1.name = '';
                //  p.push(p1);
                setprovince(p.length);
                setprovinces(p);
                let d = p[0].districts;
                //  let d2 = d[0];
                //  d2.name = '';
                setdistricts(d);
                let w = d[0].wards;
                //  let w2 = w[0];
                //  w2.name = '';
                setwards(w);
                setward(w.length);
                setwards(d[0].wards);
            });
    }, []);

    const update = () => {
        Alert.alert('Cập nhật thành công');
    };
    return (
        <View style={styles.container}>
            <Image style={{ width: 180, height: 180, marginTop: -100 }} source={require('../assets/shipper.jpg')}></Image>
            <View
                style={{
                    width: '90%',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,
                    elevation: 15,
                    backgroundColor: '#FFF',
                    padding: 20,
                    borderRadius: 10,
                    alignItems: 'center',
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: '30%', marginTop: 5 }}>Tên:</Text>
                    <TextInput value={name} onChangeText={(value) => setname(value)} style={styles.inputField}></TextInput>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ width: '30%', marginTop: 5 }}>Số điện thoại:</Text>
                    <TextInput value={phone} onChangeText={(value) => setphone(value)} style={styles.inputField}></TextInput>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ width: '30%', marginTop: 10 }}>Tỉnh, Tp:</Text>
                    <Picker onValueChange={(itemValue, itemIndex) => changeProvince(itemValue)} selectedValue={province} style={{ height: 40, width: '70%' }} itemStyle={{ backgroundColor: 'red', color: 'blue' }}>
                        {provinces.map((p, index) => (
                            <Picker.Item key={p.code} value={index} label={p.name}></Picker.Item>
                        ))}
                    </Picker>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: '30%', marginTop: 10 }}>Huyện:</Text>
                    <Picker selectedValue={district} onValueChange={(value, index) => changeDistrict(value)} style={{ height: 40, width: '70%' }}>
                        {districts.map((p, index) => (
                            <Picker.Item key={p.code} value={index} label={p.name}></Picker.Item>
                        ))}
                    </Picker>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: '30%', marginTop: 10 }}>Xã, phường:</Text>
                    <Picker onValueChange={(value, index) => setward(value)} selectedValue={ward} style={{ height: 40, width: '70%' }}>
                        {wards.map((p, index) => (
                            <Picker.Item key={p.code} value={index} label={p.name}></Picker.Item>
                        ))}
                    </Picker>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{ width: '30%', marginTop: 5 }}>Đ.chỉ cụ thể:</Text>
                    <TextInput value={address} onChangeText={(value) => setaddress(value)} style={styles.inputField}></TextInput>
                </View>
                <TouchableOpacity style={{ marginTop: 10, width: 100, alignItems: 'center' }} onPress={() => update()}>
                    <Text style={styles.button}>Cập nhật</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    inputField: {
        backgroundColor: '#FFF',
        //    padding: 5,
        paddingHorizontal: 20,
        width: '70%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 5,
        borderRadius: 20,
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        color: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 15,
    },
});
