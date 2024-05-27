import React, { useEffect, useState, useContext } from "react";
import {
    View,
    Text,
    TextInput,
    FlatList,
    StyleSheet,
    Image,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from "axios";
import CollapsibleAccordion from "../component/CollapsibleAccordion";
import { ProductContext } from "./ProductContext";
// import { SearchBar } from "react-native-elements";


const Accordion = ({navigation}) => {
    const [apiData, setApiData] = useState()
    const [isLoding, setLoading] = useState(false)
    const { products, setProducts } = useContext(ProductContext)

    const renderItem = ({item}) => (
        // setProducts(item),
        <CollapsibleAccordion item={item} onPress={pressBtn}/>
    )

    const pressBtn = ({item})=>{
        setProducts(item),
        navigation.navigate('DetailsScreen')
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        await axios.get('https://60cc791971b73400171f7d68.mockapi.io/api/v1/products')
            .then(response => {
                setApiData(response.data)
                setLoading(false)
                // console.log('Accordion====>',response.data)  
            })
            .catch(error => { console.log(error) })
        setLoading(false)
    }



    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', width: '100%', height: 60, backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20, paddingHorizontal: 15, }}>
                <View style={{ width: 40, height: 40, backgroundColor: '#fed0c7', borderRadius: 10, paddingHorizontal: 5, paddingVertical: 5 }}>
                    <Icon name='tune' size={30} color='#fa5d3f' />
                </View>
                <View style={{ width: 40, height: 40, borderRadius: 10 }}>
                    <Image source={{ uri: 'https://www.vdzincare.com/image/NoPath%20-%20Copy%20(159).png' }} style={{ width: 40, height: 40 }} />
                </View>
            </View>
            <Text style={{ paddingHorizontal: 15, fontSize: 24, fontWeight: 'bold', color: 'black', marginBottom: 5, }}>All Products</Text>
            <Text style={{ paddingHorizontal: 15, fontSize: 14, color: '#a9a9a9', marginBottom: 10, }}>Lorem ipsum dolor sit amet</Text>
            <View style={{ flexDirection: 'row', marginHorizontal: 15, alignItems: 'center', backgroundColor: '#e9e9e9', borderRadius: 10, marginBottom: 15 }}>
                <Icon style={{ backgroundColor: '#e9e9e9', paddingLeft: 10, }} name="search" size={25} color="#000" />
                <TextInput
                    style={styles.input}
                    placeholder="Search products"
                    onChangeText={(searchString) => { this.setState({ searchString }) }}
                    underlineColorAndroid="transparent"
                />
            </View>

            {isLoding ? (<ActivityIndicator size="large" color="#0000ff" />) : (

                <FlatList
                    data={apiData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()} />
            )

            }

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop:20,
    },
    input: {
        width: '60%',
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        backgroundColor: '#e9e9e9'
    }


})

export default Accordion;