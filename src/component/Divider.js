import {StyleSheet, View} from 'react-native';

const Divider = () =>{
    return(
        <View style={styles.hairline}></View>
    )
}

const styles=StyleSheet.create({
    hairline: {
        backgroundColor: '#e0e0e0',
        height:2,
        width:'100%',
        marginVertical:20,
      },

})

export default Divider;