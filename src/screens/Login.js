import React,{useState} from "react";
import { Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView,Platform } from 'react-native';
import Divider from "../component/Divider";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }){
    const [userName,setUserName] = useState('');
    const [userAge,setUserAge] = useState('');
    const [userAbout,setUserAbout] = useState('');

    const users = {
        name:userName,
        age:userAge,
        about:userAbout,
    }

    const storeData = async(users)=>{
    
        const jsonValue = JSON.stringify(users);
        await AsyncStorage.setItem('@details', jsonValue);
        console.log("My-Details==>",jsonValue)
        }
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <ScrollView>
            <Text style={styles.titleText}>Welcome to Login!</Text>
            <Text style={styles.textStyle}>Name</Text>
            <TextInput style={styles.InputText} placeholder="Enter your name" placeholderTextColor={'#AAA7A7'} onChangeText={setUserName}></TextInput>
            <Text style={styles.textStyle}>Age</Text>
            <TextInput style={styles.InputText} placeholder="Enter your age" placeholderTextColor={'#AAA7A7'} onChangeText={setUserAge}></TextInput>
            <Text style={styles.textStyle}>About</Text>
            <TextInput style={styles.InputText} placeholder="Enter about you" placeholderTextColor={'#AAA7A7'} onChangeText={setUserAbout}></TextInput>
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
            <TouchableOpacity style={styles.btnStyle}  onPress={() =>storeData(users)}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>

            <Divider/>
            <TouchableOpacity style={styles.btnStyleTwo}  onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.btnText}>GO to Profile</Text>
            </TouchableOpacity>
          
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
        marginTop: 20,
        color:'#009FB7'
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'Left',
        marginTop: 20,
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