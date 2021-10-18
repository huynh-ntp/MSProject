import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Computer from '../components/Computer';
import TopBuild from '../components/TopBuild';
import { pc1, pc2, pc3, pc4, pc5 } from '../components/ListAccessory';

const listPC = [pc1, pc2, pc3, pc4, pc5];

export default class Search extends Component {
    state = {
        input: '',
        errorInput: '',
        computers: listPC,
        filter: [],
    };
    onChange(e) {
        if (isNaN(e)) {
            this.setState({
                errorInput: 'Please input a number!',
            });
            setTimeout(() => {
                this.setState({
                    errorInput: '',
                });
            }, 2000);
        } else {
            this.setState({
                input: e,
            });
        }
    }

    //     handleOnPress() {
    //         if (!isNaN(this.state.input)) {
    //             if (this.state.input > 10000000 && this.state.input < 12000000) {
    //                 if (this.state.filter.length === 0) {
    //                     this.setState({
    //                         computers: listPC,
    //                     });
    //                 } else {
    //                     var arrShow = [];
    //                     var arrAdd = listPC;
    //                     this.state.filter.map((f, index) => {
    //                         arrAdd.map((c) => {
    //                             if (c.CPU.description.includes(f) || c.main.description.includes(f) || c.VGA.description.includes(f) || c.PSU.description.includes(f) || c.ram.description.includes(f) || c.case.description.includes(f) || c.hardDv.description.includes(f) || c.radiators.description.includes(f) || c.CPU.name.includes(f) || c.main.name.includes(f) || c.VGA.name.includes(f) || c.PSU.name.includes(f) || c.ram.name.includes(f) || c.case.name.includes(f) || c.hardDv.name.includes(f) || c.radiators.name.includes(f)) {
    //                                 if (!arrShow.includes(c)) {
    //                                     arrShow.push(c);
    //                                 }
    //                             }
    //                         });
    //                         if (index < this.state.filter.length - 1) {
    //                             arrAdd = arrShow;
    //                             arrShow = [];
    //                         }
    //                     });
    //                     this.setState({
    //                         computers: arrShow,
    //                     });
    //                 }
    //             }
    //         }
    //     }
    toDetail(pc) {
        this.props.navigation.navigate('Detail', {
            pc: { pc },
        });
    }
    addFilter(add) {
        let arr = this.state.filter;
        let exist = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === add) {
                exist = true;
            }
        }
        if (!exist) {
            arr.push(add);
        }
        this.setState({
            filter: arr,
        });
        if (this.state.computers.length > 0) {
            var arrShow = [];
            var arrAdd = listPC;
            this.state.filter.map((f, index) => {
                arrAdd.map((c) => {
                    if (c.CPU.description.includes(f) || c.main.description.includes(f) || c.VGA.description.includes(f) || c.PSU.description.includes(f) || c.ram.description.includes(f) || c.case.description.includes(f) || c.hardDv.description.includes(f) || c.radiators.description.includes(f) || c.CPU.name.includes(f) || c.main.name.includes(f) || c.VGA.name.includes(f) || c.PSU.name.includes(f) || c.ram.name.includes(f) || c.case.name.includes(f) || c.hardDv.name.includes(f) || c.radiators.name.includes(f)) {
                        if (!arrShow.includes(c)) {
                            arrShow.push(c);
                        }
                    }
                });
                if (index < this.state.filter.length - 1) {
                    arrAdd = arrShow;
                    arrShow = [];
                }
            });
            this.setState({
                computers: arrShow,
            });
        }
    }
    deleteFilter(f) {
        let arr = this.state.filter;

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === f) {
                arr.splice(i, 1);
            }
        }
        this.setState({
            filter: arr,
        });
        var arrShow = [];
        var arrAdd = listPC;
        this.state.filter.map((f, index) => {
            arrAdd.map((c) => {
                if (c.CPU.description.includes(f) || c.main.description.includes(f) || c.VGA.description.includes(f) || c.PSU.description.includes(f) || c.ram.description.includes(f) || c.case.description.includes(f) || c.hardDv.description.includes(f) || c.radiators.description.includes(f) || c.CPU.name.includes(f) || c.main.name.includes(f) || c.VGA.name.includes(f) || c.PSU.name.includes(f) || c.ram.name.includes(f) || c.case.name.includes(f) || c.hardDv.name.includes(f) || c.radiators.name.includes(f)) {
                    if (!arrShow.includes(c)) {
                        arrShow.push(c);
                    }
                }
            });
            if (index < this.state.filter.length - 1) {
                arrAdd = arrShow;
                arrShow = [];
            }
        });
        if (arr.length === 0) {
            this.setState({
                computers: listPC,
            });
        } else {
            this.setState({
                computers: arrShow,
            });
        }
    }
    render() {
        return (
            //   <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <LinearGradient style={styles.linearStyle} colors={['rgba(0,164,109,0.4)', 'transparent']}>
                    <ScrollView horizontal showsHorizontalScrollIndicator style={{ marginTop: 15 }}>
                        {this.state.filter.map((f) => (
                            <TouchableOpacity key={f} onPress={() => this.deleteFilter(f)} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10, marginBottom: 5 }}>
                                <Text style={{ color: '#FFF' }}>
                                    {f} <Text style={{ color: 'red' }}> x</Text>
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    {/* {this.filter()} */}
                    <View style={{ marginTop: 30 }}>
                        {this.state.computers.map((pc) => (
                            <Computer detail={() => this.toDetail(pc)} key={pc.id} pc={pc} />
                        ))}
                    </View>
                </LinearGradient>
            </ScrollView>
            //   </SafeAreaView>
        );
    }
    //     filter = () => (
    //         <View style={styles.filter}>
    //             <Text style={{ fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20, paddingVertical: 10 }}>Bộ lọc</Text>
    //             <View style={{ width: '100%', height: 'auto', flexDirection: 'row', marginBottom: 10 }}>
    //                 <Text style={{ marginLeft: 15, width: '30%', marginTop: 3, fontWeight: 'bold' }}>Thương hiệu:</Text>
    //                 <ScrollView horizontal style={{ width: '60%', height: 'auto' }} showsHorizontalScrollIndicator={false}>
    //                     <TouchableOpacity onPress={() => this.addFilter('Intel')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>Intel</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('ASUS')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>ASUS</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('GIGABYTE')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>GIGABYTE</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('MSI')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>MSI</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('ACER')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>ACER</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('Apple')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>Apple</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('Kingston')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>Kingston</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('MATREXX')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>MATREXX</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('XIGMATEK')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>XIGMATEK</Text>
    //                     </TouchableOpacity>
    //                 </ScrollView>
    //             </View>
    //             <View style={{ width: '100%', height: 'auto', flexDirection: 'row', marginBottom: 10 }}>
    //                 <Text style={{ marginLeft: 15, width: '30%', marginTop: 3, fontWeight: 'bold' }}>Mainboard:</Text>
    //                 <ScrollView horizontal style={{ width: '60%', height: 'auto' }} showsHorizontalScrollIndicator={false}>
    //                     <TouchableOpacity onPress={() => this.addFilter('KHT')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>KHT</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('AORUS')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>AORUS</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('ROG')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>ROG</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('GAMING')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>GAMING</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('MEG')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>MEG</Text>
    //                     </TouchableOpacity>
    //                 </ScrollView>
    //             </View>

    //             <View style={{ width: '100%', height: 'auto', flexDirection: 'row', marginBottom: 10 }}>
    //                 <Text style={{ marginLeft: 15, width: '30%', marginTop: 3, fontWeight: 'bold' }}>CPU:</Text>
    //                 <ScrollView horizontal style={{ width: '60%', height: 'auto' }} showsHorizontalScrollIndicator={false}>
    //                     <TouchableOpacity onPress={() => this.addFilter('Core i5')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>Core i5</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('Core i3')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>Core i3</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('Core i7')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>Core i7</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('Core i9')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>Core i9</Text>
    //                     </TouchableOpacity>
    //                 </ScrollView>
    //             </View>
    //             <View style={{ width: '100%', height: 'auto', flexDirection: 'row', marginBottom: 10 }}>
    //                 <Text style={{ marginLeft: 15, width: '30%', marginTop: 3, fontWeight: 'bold' }}>Ram:</Text>
    //                 <ScrollView horizontal style={{ width: '60%', height: 'auto' }} showsHorizontalScrollIndicator={false}>
    //                     <TouchableOpacity onPress={() => this.addFilter('16GB')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>16GB</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('8GB')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>8GB</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('4GB')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>4GB</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('DDR3')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>DDR3</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('DDR4')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>DDR4</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('32GB')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>32GB</Text>
    //                     </TouchableOpacity>
    //                 </ScrollView>
    //             </View>
    //             <View style={{ width: '100%', height: 'auto', flexDirection: 'row', marginBottom: 10 }}>
    //                 <Text style={{ marginLeft: 15, width: '30%', marginTop: 3, fontWeight: 'bold' }}>Case:</Text>
    //                 <ScrollView horizontal style={{ width: '60%', height: 'auto' }} showsHorizontalScrollIndicator={false}>
    //                     <TouchableOpacity onPress={() => this.addFilter('Đỏ')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>Đỏ</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('Đen')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>Đen</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('Nhám')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>Nhám</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('Trắng')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>Trắng</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('Xanh')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>Xanh</Text>
    //                     </TouchableOpacity>
    //                 </ScrollView>
    //             </View>
    //             <View style={{ width: '100%', height: 'auto', flexDirection: 'row', marginBottom: 10 }}>
    //                 <Text style={{ marginLeft: 15, width: '30%', marginTop: 3, fontWeight: 'bold' }}>Ổ cứng:</Text>
    //                 <ScrollView horizontal style={{ width: '60%', height: 'auto' }} showsHorizontalScrollIndicator={false}>
    //                     <TouchableOpacity onPress={() => this.addFilter('HDD')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>HDD</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('SSD')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>SSD</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('128GB')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>128GB</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('512GB')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>512GB</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('256GB')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>256GB</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('1TB')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>1TB</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('2TB')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>2TB</Text>
    //                     </TouchableOpacity>
    //                 </ScrollView>
    //             </View>
    //             <View style={{ width: '100%', height: 'auto', flexDirection: 'row', marginBottom: 10 }}>
    //                 <Text style={{ marginLeft: 15, width: '30%', marginTop: 3, fontWeight: 'bold' }}>Tản nhiệt:</Text>
    //                 <ScrollView horizontal style={{ width: '60%', height: 'auto' }} showsHorizontalScrollIndicator={false}>
    //                     <TouchableOpacity onPress={() => this.addFilter('nước')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>Tản nhiệt nước AIO</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => this.addFilter('quạt')} style={{ paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
    //                         <Text style={{ color: '#FFF' }}>Quạt tản nhiệt</Text>
    //                     </TouchableOpacity>
    //                 </ScrollView>
    //             </View>
    //         </View>
    //     );
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
