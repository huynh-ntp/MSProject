import React from 'react';
import { useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export function RenderScreen({ navigation }) {
    const qs1 = () => (
        <View style={styles.container}>
            <Text style={styles.qs}>Bạn render video với mục đích gì?</Text>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qsfilm)}>
                <Text style={{ padding: 15, fontSize: 16 }}>Dựng phim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs2)}>
                <Text style={{ padding: 15, fontSize: 16 }}>Quay vlog, youtube, tiktok thông thường</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs2)}>
                <Text style={{ padding: 15, fontSize: 16 }}>Cày thuê</Text>
            </TouchableOpacity> */}
        </View>
    );

    const qsfilm = () => (
        <View style={styles.container}>
            <Text style={styles.qs}>Loại phim mà bạn muốn dựng?</Text>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs2)}>
                <Text style={{ padding: 15, fontSize: 16 }}>Phim bộ dài tập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs2)}>
                <Text style={{ padding: 15, fontSize: 15 }}>Phim bom tấn Hollywood</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qsfilm2)}>
                <Text style={{ padding: 15, fontSize: 16 }}>Hoạt hình</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setqsShow(qs1)}>
                <Image style={styles.back} source={require('../assets/back.png')} />
            </TouchableOpacity>
        </View>
    );

    const qsfilm2 = () => (
        <View style={styles.container}>
            <Text style={styles.qs}>Định dạng phim yêu cầu?</Text>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs2)}>
                <Text style={{ padding: 15, fontSize: 16 }}>2D</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs2)}>
                <Text style={{ padding: 15, fontSize: 15 }}>3D</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setqsShow(qsfilm)}>
                <Image style={styles.back} source={require('../assets/back.png')} />
            </TouchableOpacity>
        </View>
    );

    const qs2 = () => (
        <View style={styles.container}>
            <Text style={styles.qs}>Độ phân giải yêu cầu?</Text>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs3)}>
                <Text style={{ padding: 15, fontSize: 16 }}>HD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs3)}>
                <Text style={{ padding: 15, fontSize: 15 }}>Full HD 1080</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs3)}>
                <Text style={{ padding: 15, fontSize: 16 }}>1K</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs3)}>
                <Text style={{ padding: 15, fontSize: 16 }}>2K</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs3)}>
                <Text style={{ padding: 15, fontSize: 16 }}>4K</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs3)}>
                <Text style={{ padding: 15, fontSize: 16 }}>8K</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setqsShow(qs1)}>
                <Image style={styles.back} source={require('../assets/back.png')} />
            </TouchableOpacity>
        </View>
    );

    const qs3 = () => (
        <View style={styles.container}>
            <Text style={styles.qs}>Chất lượng âm thanh yêu cầu?</Text>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs3)}>
                <Text style={{ padding: 15, fontSize: 16 }}>48 kb/giây</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs3)}>
                <Text style={{ padding: 15, fontSize: 15 }}>128 kb/giây</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs3)}>
                <Text style={{ padding: 15, fontSize: 16 }}>320 kb/giây</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwser} onPress={() => setqsShow(qs3)}>
                <Text style={{ padding: 15, fontSize: 16 }}>Lossless</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setqsShow(qs2)}>
                <Image style={styles.back} source={require('../assets/back.png')} />
            </TouchableOpacity>
        </View>
    );

    const [price, setprice] = useState('');
    const [errorInput, setErrorInput] = useState('');
    const [isEnd, setIsEnd] = useState(false);
    const changePrice = (value) => {
        if (isNaN(value)) {
            setErrorInput('Please input a number!');
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
        }
    };
    const final = () => (
        <View style={styles.container}>
            <TextInput onChangeText={(value) => changePrice(value)} value={price} style={styles.inputPrice} placeholderTextColor="#000000" placeholder="Số tiền bạn có"></TextInput>
            <Text style={styles.errorInput}>{errorInput}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => setqsShow(qs5)} style={{ marginRight: 120 }}>
                    <Image style={{ width: 60, height: 60 }} source={require('../assets/back.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => gotoSearch()}>
                    <Image style={{ width: 60, height: 60 }} source={require('../assets/next.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
    const [qsShow, setqsShow] = useState(qs1());
    //     const [qsPre, setqsPre] = useState("");
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
        padding: 15,
        width: '80%',
        backgroundColor: '#92DDD0',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 15,
        borderRadius: 60,
    },
    errorInput: {
        color: 'red',
        marginTop: 5,
    },
});
