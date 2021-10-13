import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({ navigation }) {
    return (
        <SafeAreaView
            style={{
                backgroundColor: '#FFF',
                flex: 1,
            }}
        >
            <View style={styles.topScreen}>
                <Image style={styles.topImage} source={require('../assets/1.png')} />
                <View style={styles.downTopImage}>
                    <View
                        style={{
                            width: '50%',
                        }}
                    >
                        <Text style={styles.wellcome}>Hi! My Suggest</Text>
                        <Text
                            style={{
                                color: '#FFF',
                                paddingLeft: 10,
                            }}
                        >
                            Let's build your computer
                        </Text>
                    </View>
                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                        <Image style={styles.logo} source={require('../assets/logo.png')} />
                    </View>
                </View>
            </View>
            <View
                style={{
                    alignItems: 'flex-start',
                    marginTop: 12,
                    marginBottom: -23,
                    marginLeft: 12,
                }}
            >
                <Text
                    style={{
                        color: '#585a61',
                        fontSize: 22,
                        fontWeight: 'bold',
                    }}
                >
                    Bạn build PC cho việc:
                </Text>
                <View style={{ height: 4, backgroundColor: '#00a46c', width: 220, marginTop: 5 }}></View>
            </View>
            <View
                style={{
                    height: '40%',
                    marginTop: 20,
                }}
            >
                <View style={{ flexDirection: 'row', width: '100%', height: '50%' }}>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                            navigation.navigate('GameScreen1');
                        }}
                    >
                        <Image style={styles.categoryImage} source={require('../assets/controller.png')} />
                        <Text>Chơi game</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Image style={styles.categoryImage} source={require('../assets/vector.png')} />
                        <Text>Render video</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', height: '50%' }}>
                    <TouchableOpacity style={styles.option}>
                        <Image style={styles.categoryImage} source={require('../assets/workers.png')} />
                        <Text>Văn phòng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Image style={styles.categoryImage} source={require('../assets/coding.png')} />
                        <Text>Coding</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', height: '50%' }}>
                    <TouchableOpacity style={styles.option}>
                        <Image style={styles.categoryImage} source={require('../assets/cloud-computing.png')} />
                        <Text>Làm server</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Image style={styles.categoryImage} source={require('../assets/apps.png')} />
                        <Text>Khác</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topScreen: {
        backgroundColor: '#00a46c',
        height: '25%',
        paddingHorizontal: 20,
        borderBottomLeftRadius: 50,
        //    borderBottomRightRadius: 20,
    },
    topImage: {
        marginTop: 50,
        width: 20,
    },
    downTopImage: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 25,
        alignItems: 'center',
    },
    wellcome: {
        fontSize: 23,
        fontWeight: '700',
        color: '#FFF',
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 20,
    },
    categoryImage: {
        marginTop: 20,
        width: 80,
        height: 80,
    },
    option: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        //    backgroundColor: 'red',
    },
});
