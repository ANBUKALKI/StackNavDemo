import React,{useState} from "react";
import {View,Text, ScrollView, StyleSheet,Modal,Pressable,Image, Button,Alert} from 'react-native';
import Divider from "../component/Divider";

export default function Fridaytask({navigation}){
    const [modalVisible, setModalVisible] = useState(false);

    return(
     <ScrollView style={styles.container}>
           <View>
            <ScrollView horizontal={true} style={styles.scrollStyle}>
                <View style={styles.cardStyle}>
                    <Text style={styles.cardText}>Card 1</Text>
                </View>
                <View style={styles.cardStyle}>
                    <Text style={styles.cardText}>Card 2</Text>
                </View>
                <View style={styles.cardStyle}>
                    <Text style={styles.cardText}>Card 3</Text>
                </View>
            </ScrollView>
        </View>
        <Divider/>
        <Text style={styles.paragraph}>React Native brings the best parts of developing with React to native development. It's a best-in-class JavaScript library for building user interfaces.</Text>
        <Divider/>

        <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Text style={styles.titeText}>Success!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.hidebtn}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
        </Modal>
        
        <Pressable style={styles.showbtn} onPress={() => setModalVisible(true)}>
            <Text style={styles.showbtnText}>Show Modal</Text>
        </Pressable>
        <Divider/>
        <View style={{flex:2,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}  style={{width:80,height:80,marginBottom:20,}}/>
        <Image source={require('../assets/imgage_2.png')} style={{width:100,height:100,marginBottom:20,}} />
        </View>
        <Divider/>
        <View>
        <Button title="Click Me!"  onPress={() => Alert.alert('Hello!')}/>
        </View>
        <Divider/>
        <Pressable style={styles.btnStyle}>
            <Text style={styles.showbtnText}>Click Me!</Text>
        </Pressable>
        <Divider/>
        <Pressable style={styles.btnStyle} onPress={()=>navigation.goBack()}>
            <Text style={styles.showbtnText}>Go Back</Text>
        </Pressable>
        <Divider/>
        <Pressable style={styles.btnStyle} onPress={()=>navigation.push('Accordion')}>
            <Text style={styles.showbtnText}>Accordion</Text>
        </Pressable>
     </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
      // flex:1,
        // flexDirection:'row',
        // marginVertical:20,
        // marginTo:50,
        // paddingHorizontal:10,
    },
    cardStyle:{
        width:200,
        height:150,
        backgroundColor:'red',
        margin:5,
        borderRadius:8,
        shadowColor: 'black',
        shadowOpacity:0.25,
        shadowRadius:3.3,
        shadowOffset: {width: -2, height: 4},
        elevation:3,
    },
    cardText:{
        fontSize:20,
        marginTop:60,
        textAlign:'center',
        color:'white',
    },
    paragraph:{
        textAlign:'justify',
        color:'black',
        fontSize:18,
        padding:10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
    modalView: {
        width:300,
        height:200,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      showbtn:{
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor:'pink',
        marginHorizontal:20,
      },
      showbtnText:{
        fontSize:20,
        color:'black',
        textAlign:'center'
      },
      hidebtn: {
        backgroundColor: '#2196F3',
        borderRadius: 20,
        padding: 10,
        marginTop:20,
        elevation: 2,
        fontSize:16,
        
      },
      titeText:{
        color:'green',
        fontSize:18,
        marginTop:20,
      },
      btnStyle:{
        padding:20,
        marginVertical:20,
        marginHorizontal:20,
        backgroundColor:'#009FB7'
      }


})