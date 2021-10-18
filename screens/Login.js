import React from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Login({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <ImageBackground style={styles.bg} source={require('../assets/loginBg.jpg')}>
                <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
                <Text style={{ color: '#FFF', fontSize: 24, fontWeight: 'bold', marginBottom: 80 }}>My Suggest</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.facebook}>
                    <Image style={{ width: 50, height: 50 }} source={require('../assets/facebook.png')}></Image>
                    <View style={{ height: 50, justifyContent: 'center', marginLeft: 45 }}>
                        <Text style={{ fontSize: 16, color: '#FFF' }}>Sign in with facebook</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.google}>
                    <Image style={{ width: 50, height: 50 }} source={require('../assets/google.png')}></Image>
                    <View style={{ height: 50, justifyContent: 'center', marginLeft: 45 }}>
                        <Text style={{ fontSize: 16, color: '#000' }}>Sign in with google</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.google}>
                    <Image style={{ width: 50, height: 50, borderRadius: 10 }} source={require('../assets/zalo.jpg')}></Image>
                    <View style={{ height: 50, justifyContent: 'center', marginLeft: 45 }}>
                        <Text style={{ fontSize: 16, color: '#000' }}>Sign in with zalo</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    logo: {
        width: 70,
        height: 70,
        borderRadius: 30,
    },
    facebook: {
        backgroundColor: '#475993',
        width: '80%',
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 15,
    },
    google: {
        backgroundColor: '#FFF',
        width: '80%',
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 15,
    },
});
