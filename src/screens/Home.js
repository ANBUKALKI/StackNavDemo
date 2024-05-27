import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ActivityIndicator, Modal, Pressable } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { ProductContext } from "./ProductContext";
// import Animated from 'react-native-reanimated';


export default function Home({ navigation }) {

    const [apiData, setData] = useState()
    const [isLoding, setLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [users, setUser] = useState('')
    const { products, setProducts } = useContext(ProductContext)

    useEffect(() => {
        fetchData()
        getData().then((data) => {
            setUser(data);
        });
    }, []);

    const fetchData = async () => {
        setLoading(true)
        await axios.get('https://dummyjson.com/products')
            .then(response => {
                setData(response.data.products);
                // console.log('setSelectedProduct====>',response.data.products)
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(true)
            });
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@Key')
            console.log(setUser)
            return jsonValue != null ? JSON.parse(jsonValue) : null;

        } catch (e) {
            console.log('Error occured', e)
        }
    }

    // console.log("Api data----->",apiData.products[0])

    const renderItem = ({ item }) => <TouchableOpacity onPress={() => {
        setProducts(item);
        navigation.navigate('ProductDetails', { item })
    }

    }>
        <View style={styles.cardStyle}>
            <View style={styles.imgView}>
                <Image style={styles.imgStyle} source={{ uri: item.images[0] }} />
                <View style={styles.details}>
                    <Text style={styles.brandTextStyle}>{item.brand}</Text>
                    <Text style={styles.titleTextStyle}>{item.title}</Text>
                    <Text style={styles.ratingTextStyle}> {item.rating} <Text style={styles.starStyle}>⭐⭐⭐⭐⭐</Text> </Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>

    return (
        <View style={styles.container} >
            <View style={styles.hearder}>
                <Modal animationType="fade" transparent={true} visible={modalVisible}>
                    <View style={[styles.centeredView, { backgroundColor: modalVisible ? 'rgba(0, 0, 0, 0.5)' : undefined }]}>
                        <View style={styles.modalView}>
                            <Image source={require('../assets/image.png')} style={styles.modalImageView} />
                            {/* <View>
                            <Text style={styles.titeText}>Name:<Text numberOfLines={1} ellipsizeMode="tail">{users.name}</Text></Text>
                            <Text style={styles.titeText}>EmaiID:<Text numberOfLines={1} ellipsizeMode="tail">{users.email}</Text></Text>
                            <Text style={styles.titeText}>Designation:<Text numberOfLines={1} ellipsizeMode="tail">{users.designation}</Text></Text>
                            </View> */}
                            <View style={{ flexDirection: 'row', padding: 5 }}>
                                <View style={{ width: "25%", padding: 3 }}>
                                    <Text style={styles.titeText}>Name :</Text>
                                    <Text style={styles.titeText}>Email :</Text>
                                    <Text style={styles.titeText}>Role  :</Text>
                                </View>
                                <View style={{ width: "65%", padding:3}}>
                                    <Text style={styles.titeText} numberOfLines={1} ellipsizeMode="tail">{users.name}</Text>
                                    <Text style={styles.titeText} numberOfLines={1} ellipsizeMode="tail">{users.email}</Text>
                                    <Text style={styles.titeText} numberOfLines={1} ellipsizeMode="tail">{users.designation}</Text>
                                </View>
                            </View>

                            <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.hidebtn}>Hide Modal</Text>
                            </Pressable>
                        </View>

                    </View>

                </Modal>
                <View >
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image source={require('../assets/image.png')} style={styles.hearderText} />
                    </TouchableOpacity>
                </View>

            </View>

            {
                isLoding ?
                    (<ActivityIndicator size="large" color="#0000ff" />) : (
                        <FlatList
                            data={apiData}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderItem}
                            // showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />
                    )
            }

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding:20,
        // marginHorizontal: 20,
        // marginVertical: 50,
        backgroundColor: '#E7E7E7',
    },
    hearder: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        height: 62,
        backgroundColor: 'white'
    },
    hearderText: {
        marginVertical: 10,
        marginHorizontal: 20,
        textAlign: 'right',
        width: 40,
        height: 40,
        // backgroundColor: 'red',
        borderRadius: 20
    },
    cardStyle: {
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    imgView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    imgStyle: {
        width: '40%',
        height: 100,
        borderRadius: 10,
        resizeMode: 'stretch'
        // marginTop: 40,
        // marginLeft: 20,

    },
    details: {
        flex: 2,
        flexDirection: 'columns',
        //  alignItems:'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: 20
    },
    brandTextStyle: {
        fontSize: 22,
        color: 'black',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    titleTextStyle: {
        fontSize: 18,
        color: 'black',
        textAlign: 'left'
    },
    ratingTextStyle: {
        fontSize: 16,
        color: 'black',
        // textAlign: 'right'
    },
    starStyle: {
        fontSize: 14,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 2,
    },
    modalView: {
        width: 300,
        height: 300,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    showbtn: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    showbtnText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    },
    hidebtn: {
        backgroundColor: '#2196F3',
        borderRadius: 20,
        justifyContent: 'flex-end',
        padding: 10,
        marginTop: 20,
        // elevation: 2,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    // titeText: {
    //     color: 'black',
    //     fontSize: 16,
    //     fontWeight: 'bold',
    //     marginTop: 10,
    //     textAlign: 'justify'
    // },
    titeText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'left'
    },
    modalImageView: {
        width: 50,
        height: 50,
    },





})

{/* <TouchableOpacity style={styles.navbtnStyle}  onPress={() => navigation.navigate('ProductDetails')}>
                <Text style={styles.btnText}>ProductDetails</Text>
        </TouchableOpacity>
        <Divider/> */}
{/* <TouchableOpacity style={styles.navbtnStyle}  onPress={() => storeData(products)}>
                <Text style={styles.btnText}>Async</Text>
        </TouchableOpacity> */}


// container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//     marginHorizontal:20,
// },
// navbtnStyle: {
//     width: '100%',
//     height: 45,
//     backgroundColor: '#009FB7',
//     borderRadius: 8,
//     padding: 5,
//     marginTop: 10,
// },
// btnText:{
//     fontSize: 24,
//     fontWeight: 'bold',
//     color:'white',
//     textAlign:'center'
// }