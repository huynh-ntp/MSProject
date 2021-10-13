import React from 'react';
import { StyleSheet, ImageBackground, Image, Text, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
export function Thanks({ navigation }) {
    const resetAction = () => {
        //    navigation.reset({
        //        index: 0,
        //        routes: [{ name: 'Home' }],
        //    });
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image style={styles.check} source={require('../assets/check.png')}></Image>
                <Text>Cảm ơn quý khách!</Text>
                <Text>Nhân viên sẽ liên hệ sớm để xác nhận đơn hàng.</Text>
                <Text>Hàng sẽ được nhân viên đem đến tận nơi để quý </Text>
                <Text>khách kiểm tra và tiến hành lắp ráp.</Text>
                <TouchableOpacity onPress={() => resetAction()}>
                    <Text style={styles.ok}>OK</Text>
                </TouchableOpacity>
            </View>
            <Image style={styles.bottomImg} source={require('../assets/shipper2.png')}></Image>
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
    ok: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        backgroundColor: '#32bea6',
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 10,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 15,
    },
    box: {
        width: '90%',
        padding: 20,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 15,
        borderRadius: 20,
        alignItems: 'center',
    },
    check: {
        height: 80,
        width: 80,
        marginBottom: 20,
    },
    bottomImg: {
        width: '100%',
        height: 300,
        marginBottom: -100,
    },
});
