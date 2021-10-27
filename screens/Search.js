import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Computer from '../components/Computer';
import TopBuild from '../components/TopBuild';
import { pc1, pc2, pc3, pc4, pc5 } from '../components/ListAccessory';
import { film1, film2 } from '../components/ListAccessory';

const listPC = [pc1, pc2, pc3, pc4, pc5];
const listPC2 = [film1, film2];
export function Search({ navigation, route }) {
    const { purpose } = route.params;
    const computers = purpose === 'Game' ? listPC : listPC2;
    const toDetail = (pc) => {
        navigation.navigate('Detail', {
            pc: pc,
        });
    };

    return (
        <ScrollView style={styles.container}>
            <LinearGradient style={styles.linearStyle} colors={['rgba(0,164,109,0.4)', 'transparent']}>
                <View style={{ marginTop: 30 }}>
                    {computers.map((pc) => (
                        <Computer detail={() => toDetail(pc)} key={pc.id} pc={pc} />
                    ))}
                </View>
            </LinearGradient>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    search: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    linearStyle: {
        left: 0,
        right: 0,
        height: '100%',
        //    alignItems: 'center',
    },

    textInput: {
        fontWeight: '700',
        fontSize: 17,
        width: 260,
    },
    searchImage: {
        marginLeft: 25,
        width: 25,
        height: 25,
    },
    errorInput: {
        marginLeft: 40,
        color: 'red',
        marginTop: 5,
    },
    filter: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFF',
        borderRadius: 5,
    },
});
