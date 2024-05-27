import React, { useContext } from "react";
import { View, Text, Image, FlatList } from 'react-native';
import { ProductContext } from "./ProductContext";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';


// const myIcon = <Icon name="rocket" size={30} color="#900" />

export default function DetailsScreen({navigation}) {
    const { products } = useContext(ProductContext)


    return (
     
        // <View>{myIcon}</View>
        <View>
           <View style={{ flexDirection: 'row', padding: 5 }}>
            <View style={{ width: "35%", padding: 5 }}>
                <Text style={{ textAlign: 'left' }}>Product ID</Text>
                <Text style={{ textAlign: 'left' }}>Product Name </Text>
                <Text style={{ textAlign: 'left' }}>Description</Text>
            </View>
            <View style={{ width: "65%", padding: 5 }}>
                <Text style={{ textAlign: 'left' }} numberOfLines={1} ellipsizeMode="tail">:{products.id}</Text>
                <Text style={{ textAlign: 'left' }} numberOfLines={1} ellipsizeMode="tail">:{products.name} </Text>
                <Text style={{ textAlign: 'left' }} numberOfLines={1} ellipsizeMode="tail">:{products.description} </Text>
            </View>
             
            
        </View>
           

        </View>
    )

}