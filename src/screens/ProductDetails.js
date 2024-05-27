import React, { useState, useEffect, useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image, FlatList } from 'react-native';
import axios from "axios";
import Divider from "../component/Divider";
import { ProductContext } from "./ProductContext";

export default function ProductDetails({route, navigation }) {
    const {products} = useContext(ProductContext)

    const {item} = route.params;

    return (
        <View style={styles.container}>
        <FlatList data={products.images} 
               horizontal
               keyExtractor={(id)=>id.toString()} 
               renderItem={({item})=>(
                <View>
                    <Image style={styles.imgStyle} source={{uri:item}}/>
                </View>
                
               )}
               showsHorizontalScrollIndicator={false}
               pagingEnabled
        />
        {/* <Text style={styles.textStyle}>Image:{products.thumbnail}</Text> */}
    
        <Text style={styles.textStyle}>Brand Name: {products.brand}</Text>
        <Text style={styles.textStyle}>Title: {products.title}</Text>
        <Text style={styles.textStyle}>Rating: {products.rating} <Text style={styles.starStyle}>⭐⭐⭐⭐⭐</Text> </Text>
            <Divider />
            <TouchableOpacity style={styles.navbtnStyle}  onPress={()=>navigation.goBack()}>
                <Text style={styles.btnText}>Go Back</Text>
            </TouchableOpacity>
            {/* <Divider/>
            <TouchableOpacity style={styles.navbtnStyle}  onPress={()=>navigation.push('DetailsScreen')}>
                <Text style={styles.btnText}>DetailsScreen</Text>
            </TouchableOpacity> */}
            <Divider/>
            <TouchableOpacity style={styles.navbtnStyle}  onPress={()=>navigation.push('SignIn')}>
                <Text style={styles.btnText}>Logout</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    navbtnStyle: {
        width: '90%',
        backgroundColor: '#009FB7',
        borderRadius: 8,
        padding: 5,
        marginHorizontal:20,
        
    },
    btnText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    textStyle: {
        fontSize: 24,
        color: 'black',
        textAlign: 'justify',
        marginHorizontal:20,
        marginVertical:5,

    },
    imgStyle:{
        width:400,
        height:250,
        marginRight:10,
        marginLeft:10,
        resizeMode:'contain',
    },
    starStyle: {
        fontSize: 14,
    }
})