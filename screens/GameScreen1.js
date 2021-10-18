import React from 'react';
import { useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export function GameScreen1({ navigation }) {
    const qs1 = () => (
        <View style={styles.container}>
            <Text style={styles.qs}>Bạn chơi game với mục đích gì?</Text>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs2)}>
                <Text style={{ padding: 15, fontSize: 16 }}>Giải trí thông thường</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs2)}>
                <Text style={{ padding: 15, fontSize: 16 }}>Stream game </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs2)}>
                <Text style={{ padding: 15, fontSize: 16 }}>Cày thuê</Text>
            </TouchableOpacity>
        </View>
    );

    const qs2 = () => (
        <View style={styles.container}>
            <Text style={styles.qs}>Cấu hình game yêu cầu?</Text>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs3)}>
                <Text style={{ padding: 15, fontSize: 16 }}>Cấu hình thấp ( LoL, Fifa, Võ Lâm, ...) </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs3)}>
                <Text style={{ padding: 15, fontSize: 15 }}>Cấu hình trung bình (Pubg, Blade & Soul, ... ) </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs3)}>
                <Text style={{ padding: 15, fontSize: 16 }}>Cấu hình cao (Gta5, CSGO, The Division, ...)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setqsShow(qs1)}>
                <Image style={styles.back} source={require('../assets/back.png')} />
            </TouchableOpacity>
        </View>
    );

    const qs3 = () => (
        <View style={styles.container}>
            <Text style={styles.qs}>Yêu cầu về trải nghiệm?</Text>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs4)}>
                <Text style={{ padding: 15, fontSize: 16 }}>Uư tiên hình ảnh cao </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs4)}>
                <Text style={{ padding: 15, fontSize: 15 }}>Uư tiên sự mượt mà </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs4)}>
                <Text style={{ padding: 15, fontSize: 16 }}>Cân bằng</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setqsShow(qs2)}>
                <Image style={styles.back} source={require('../assets/back.png')} />
            </TouchableOpacity>
        </View>
    );

    const qs4 = () => (
        <View style={styles.container}>
            <Text style={styles.qs}>Số lượng game mà bạn chơi?</Text>
            <TouchableOpacity style={styles.anwser} onPress={() => setIsEnd(true)}>
                <Text style={{ padding: 15, fontSize: 16 }}>Dưới 5 game</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setIsEnd(true)}>
                <Text style={{ padding: 15, fontSize: 15 }}>Dưới 10 game</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setIsEnd(true)}>
                <Text style={{ padding: 15, fontSize: 15 }}>Dưới 15 game</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setIsEnd(true)}>
                <Text style={{ padding: 15, fontSize: 16 }}>Trên 15 game</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setqsShow(qs3)}>
                <Image style={styles.back} source={require('../assets/back.png')} />
            </TouchableOpacity>
        </View>
    );

    const [price, setprice] = useState('');
    const [errorInput, setErrorInput] = useState('');
    const [isEnd, setIsEnd] = useState(false);
    const changePrice = (value) => {
        if (isNaN(value)) {
            setErrorInput('Xin nhập số.2323');
            setTimeout(() => {
                setErrorInput('');
            }, 2000);
        } else {
            setprice(value.trim());
        }
    };
    const gotoSearch = () => {
        if (price !== '') {
            navigation.navigate('Search');
        } else {
            setErrorInput('Nhập giá trước khi tìm kiếm.');
            setTimeout(() => {
                setErrorInput('');
            }, 2000);
        }
    };
    const final = () => (
        <View style={styles.container}>
            <View
                style={{
                    width: '90%',
                    alignItems: 'center',
                    backgroundColor: '#FFF',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,
                    elevation: 15,
                    borderRadius: 10,
                }}
            >
                <Text style={{ marginBottom: 20, marginTop: 30, fontSize: 20 }}>Nhập số tiền bạn có (VNĐ)</Text>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <Text style={{ marginTop: 15, marginRight: 10, marginLeft: 10 }}>Số tiền:</Text>
                    <TextInput onChangeText={(value) => changePrice(value)} value={price} style={styles.inputPrice}></TextInput>
                </View>
                <Text style={styles.errorInput}>{errorInput}</Text>
                <TouchableOpacity onPress={() => gotoSearch()}>
                    <Text style={styles.button}>{`Tìm kiếm gợi ý `}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => setIsEnd(false)}>
                    <Image style={{ width: 60, height: 60 }} source={require('../assets/back.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
    const [qsShow, setqsShow] = useState(qs1());
    return !isEnd ? <View style={{ flex: 1 }}>{qsShow}</View> : <View style={{ flex: 1 }}>{final()}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //    backgroundColor: '#FFF',
    },
    qs: {
        fontSize: 24,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        fontWeight: 'bold',
        textShadowColor: '#92DDD0',
    },
    anwser: {
        width: '90%',
        alignItems: 'center',
        backgroundColor: '#92DDD0',
        borderRadius: 60,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 15,
    },
    back: {
        width: 60,
        height: 60,
        marginTop: 10,
    },
    inputPrice: {
        padding: 10,
        width: '75%',
        //    backgroundColor: '#92DDD0',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 15,
        borderRadius: 10,
    },
    errorInput: {
        color: 'red',
        marginTop: 5,
    },

    button: {
        backgroundColor: '#92DDD0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderRadius: 60,
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
