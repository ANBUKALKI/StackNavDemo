import React, { useState,useContext} from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ProductContext } from "../screens/ProductContext";


const CollapsibleAccordion = ({ item, onPress}) => {
    const [expanded, setExpanded] = useState(false);
    // const { products, setProducts } = useContext(ProductContext)

    const toggleExpand = () => {
        setExpanded(!expanded);
    }

 
    return (
        
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={toggleExpand} style={[styles.itemTouchable,]}>
                <View style={[styles.accordionStyle, {
                    backgroundColor: expanded == true ? '#e9e9e9' : '#fff',
                    elevation: expanded == true ? null : 2,
                    borderBottomLeftRadius: expanded == true ? null : 10,
                    borderBottomRightRadius: expanded == true ? null : 10,
                }]}>
                    <Text style={styles.headerText}>#{item.id}</Text>
                    <Text style={styles.headerText}>{item.name}</Text>
                
                    <Icon name={expanded == true ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='black' />
                </View>
            </TouchableWithoutFeedback>
            { 
                expanded && (
                <TouchableOpacity onPress={onPress}>
                <View style={styles.itemContent}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 15 }}>
                        <View style={{width:'50%'}}>
                            <Text style={styles.titleText}>Product id</Text>
                            <Text style={styles.mainText}>{item.pid}</Text>
                            <Text style={styles.titleText}>Product name</Text>
                            <Text style={styles.mainText}>{item.name}</Text>
                        </View>
                        <View style={{ width: 100, height: 140, borderWidth: 1, borderColor: 'black', borderRadius: 10, marginRight: 10 }}>
                            <Image source={{ uri: item.image }} style={{ width: 100, height: 140, resizeMode:'stretch',borderRadius: 10,}} />
                        </View>
                    </View> 
                    <View style={{paddingHorizontal:15}}>
                        <Text style={styles.titleText}>Product description</Text>
                            <Text style={styles.mainText}>{item.description}</Text>
                     </View>
                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 15 }}>
                        <View style={{width:'50%'}}>
                            <Text style={styles.titleText}>Product price</Text>
                            <Text style={styles.mainText}>${item.price}</Text>
                            <Text style={styles.titleText}>Sales Price</Text>
                            <Text style={styles.mainText}>${item.sale_price}</Text>
                        </View>
                        <View style={{ width: 100, height: 100, backgroundColor: '#fed0c7', borderRadius: 10, marginRight: 10 ,paddingHorizontal:15,paddingVertical:20}}>
                            {/* <Image source={{ uri: item.image }} style={{ width: 300, height: 200, }} /> */}
                            <Text style={styles.titleText}>Purchased</Text>
                            <Text style={{fontSize:28,textAlign:'center',fontWeight:'bold',color:'#fa5d3f'}}>{item.num_of_purchases}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 15 }}>
                            <View style={{width:'50%'}}>
                            <Text style={styles.titleText}>Status</Text>
                            <Text style={{width:'70%', height:30, backgroundColor: item.status == true ? 'green' :'red' , color:'white', borderRadius: 15,textAlign:'center',padding:3, fontWeight:'bold'}}>{item.status == true ? 'published' : 'Not Published'}</Text>
                        </View>
                        <View style={{ borderWidth:2, borderColor: '#fed0c7', borderRadius: 8, marginRight: 10 , padding:10, shadowColor:'gray', elevation:1,shadowOpacity:5, shadowOffset: { width: 6, height: 6 },shadowRadius: 2,shadowOpacity: 0.2,}}>
                        {/* <Icon  /> */} 
                        <Image source={{ uri:'https://www.palmleafinnovations.com/wp-content/uploads/2023/07/writing-1.png' }} style={{ width: 30, height: 30, }} />
                        </View>
                    </View> 
                </View>
                </TouchableOpacity>
            )
            
            }
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems:'center',
        paddingHorizontal: 15,
    },
    accordionStyle: {
        width: '100%',
        height: 50,
        marginBottom: 10,
        // borderWidth:5,
        // borderColor:'#e9e9e9',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        // borderWidth:2,
        // borderRadius: 10,

        // borderColor:'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        shadowColor: '#52006A',
        // shadowOpacity: 0.5,
        // shadowRadius: 5,
        // shadowOffset: {
        //     width: -2,
        //     height: 4,
        // },
        // elevation: 2,

    },
    headerText: {
        fontSize: 16,
        color: 'black'

    },
    itemTouchable: {
        borderRadius: 10,
        // overflow: "hidden",
    },
    itemContent: {
        marginBottom: 10,
        marginTop:-10,
        marginLeft:1,
        marginRight:1,
        // fontSize: 14,
        // color: "#666",
        // backgroundColor: '#fffff',
        padding: 10,
        // borderRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        shadowColor: '#52006A',
        // borderColor: 'black',
        elevation: 1,
    },
    titleText: {
        fontSize: 14,
        marginBottom: 5,
        color: 'gray',
        fontWeight: '800',

    },
    mainText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
        flex: 1,
        flexShrink:1


    }
})

export default CollapsibleAccordion;