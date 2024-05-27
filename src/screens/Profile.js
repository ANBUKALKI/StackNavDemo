import React,{useState,useEffect} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Divider from "../component/Divider";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile({route,navigation }) { //route, navigation 
    // const { userName, userAge, userAbout } = route.params;
    const [users,setUsers] = useState('')

    const getData = async() => {
        try {
          const jsonValue = await AsyncStorage.getItem('@details');
        //   console.log('GetData ====>',jsonValue);
        //   setUsers(JSON.parse(jsonValue));
          console.log(setUsers);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          // error reading value
          console.log('Error to get data retrive.')
        }
      }

   
    //   console.log("Name ---->",Details );

    useEffect(() => {
        getData().then((data) => {
          setUsers(data);
        });
      },[]);


    return (
        <ScrollView>
        <View style={styles.container}>
        
            <Image source={require('../assets/image.png')} style={styles.profileImg} />
            <Text style={styles.titleText}>Profile</Text>
            <Divider/>
            <View style={styles.rowContainer}>
                {/* <View style={styles.itemContainer}><View style={styles.item}><Text style={styles.textStyle}>Name :</Text></View></View>
                <View style={styles.itemContainer}><View style={styles.item}><Text style={styles.textStyle}>{setUsers.name}</Text></View></View>
                <View style={styles.itemContainer}><View style={styles.item}><Text style={styles.textStyle}>Age :</Text></View></View>
                <View style={styles.itemContainer}><View style={styles.item}><Text style={styles.textStyle}>{setUsers.age}</Text></View></View>
                <View style={styles.itemContainer}><View style={styles.item}><Text style={styles.textStyle}>About :</Text></View></View>
                <View style={styles.itemContainer}><View style={styles.item}><Text style={styles.textStyle}>{setUsers.about}</Text></View></View> */}
             
                <View style={styles.itemContainer}><View style={styles.item}><Text style={styles.textStyle}>Name :</Text></View></View>
                <View style={styles.itemContainer}><View style={styles.item}><Text style={styles.textStyle}>{users.name}</Text></View></View>
                <View style={styles.itemContainer}><View style={styles.item}><Text style={styles.textStyle}>Age :</Text></View></View>
                <View style={styles.itemContainer}><View style={styles.item}><Text style={styles.textStyle}>{users.age}</Text></View></View>
                <View style={styles.itemContainer}><View style={styles.item}><Text style={styles.textStyle}>About :</Text></View></View>
                <View style={styles.itemContainer}><View style={styles.item}><Text style={styles.textStyle}>{users.about}</Text></View></View>
              

         {/* <Text style={styles.textStyle}>Name: {users.name}</Text>
          <Text style={styles.textStyle}>Age: {users.age}</Text>
          <Text style={styles.textS}>Email: {users.email}</Text> */}

            </View>
            <Divider/>
            <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('ProductDetails')}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btnText}>Go to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('Fridaytask')}>
                <Text style={styles.btnText}>FridayTask</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.goBack()}>
                <Text style={styles.btnText}>Go to Login</Text>
            </TouchableOpacity>
            
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImg: {
        width: 80,
        height: 80,
        borderRadius: 45,
    },
    titleText: {
        fontSize: 18,
    },
    hairline: {
        backgroundColor: '#e0e0e0',
        height: 2,
        width: '90%',
        marginVertical: 20,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnStyle: {
        width: '80%',
        height: 45,
        backgroundColor: 'dodgerblue',
        borderRadius: 8,
        padding: 5,
        marginBottom: 20,
    },
    btnText: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white'
    },
    rowContainer: {
        // flex: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    itemContainer: {
        width: '50%', // 50% -> 2 columns | 33% -> 3 columns | 25% -> 4 columns
        textAlign: 'center',
        marginVertical: 20,
    },
    item: {
        // backgroundColor: '#EEEEEE',
        height: "calc(100% - 8px)",
        alignItems: 'center'
    }

})