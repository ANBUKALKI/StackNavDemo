import React,{useState} from "react";
import { Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView,Platform, Alert, Image, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function SignIn({ navigation }){
    const [userName,setUserName] = useState('');
    const [userEmailID,setUserEmailID] = useState('');
    const [userDesignation,setUserDesignation] = useState('');
  

    const users = {
        name:userName,
        email:userEmailID,
        designation:userDesignation,
    }



    const storeData = async(users)=>{
    
        const jsonValue = JSON.stringify(users);
        await AsyncStorage.setItem('@Key', jsonValue);
        console.log("My-Details==>",jsonValue)
        }

    const handlePress = ()=>{

                storeData(users)
                navigation.navigate('BottomTab');       
    }


    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <ScrollView>
            <Text style={styles.titleText}>Welcome to SignIn!</Text>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
            <Image source={{uri:'https://hepl.com/assets/images/logo/LOGO-HEPL.webp'}}  style={{width:150,height:80,resizeMode:'contain',borderWidth:2,}}/>
            </View>
            <Text style={styles.textStyle}>Name</Text>
            <TextInput style={styles.InputText} placeholder="Enter your name" placeholderTextColor={'#AAA7A7'} onChangeText={setUserName}></TextInput>
            <Text style={styles.textStyle}>Emial ID</Text>
            <TextInput style={styles.InputText} placeholder="Enter your email ID" placeholderTextColor={'#AAA7A7'} onChangeText={setUserEmailID}></TextInput>
            <Text style={styles.textStyle}>Designation</Text>
            <TextInput style={styles.InputText} placeholder="Enter about your designation" placeholderTextColor={'#AAA7A7'} onChangeText={setUserDesignation}></TextInput>
       
            <TouchableOpacity style={styles.btnStyle}  onPress={() =>handlePress()}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>

            {/* <Divider/>
            <TouchableOpacity style={styles.btnStyleTwo}  onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btnText}>GO to Home</Text>
            </TouchableOpacity> */}
            {/* {storeData(users),navigation.navigate('Home')} */}
          
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 20,
    },
    titleText: {
        fontSize: 28,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20,
        color:'#009FB7'
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'Left',
        marginTop: 10,
    },
    InputText: {
        width: '100%',
        height: 45,
        borderWidth: 2,
        borderRadius: 8,
        marginTop: 20,
        marginBottom:20,
        paddingLeft: 10,
        borderColor:'dodgerblue'
    },
    btnStyle: {
        width: '100%',
        height: 45,
        backgroundColor: 'dodgerblue',
        borderRadius: 8,
        padding: 5,
        marginTop: 40,
    },
    btnStyleTwo: {
        width: '100%',
        height: 45,
        backgroundColor: '#009FB7',
        borderRadius: 8,
        padding: 5,
        marginTop: 10,
    },
    btnText:{
        fontSize: 24,
        fontWeight: 'bold',
        color:'white',
        textAlign:'center'
    }
})

     {/* <Button style={styles.btnStyle} title="Go to Profile" onPress={() => navigation.navigate('Profile',{
                userName,
                userAge,
                userAbout
            })} /> */}


            {/* <TouchableOpacity style={styles.btnStyle}  onPress={() => navigation.navigate('Profile',{
                userName,
                userAge,
                userAbout
            })}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity> */}