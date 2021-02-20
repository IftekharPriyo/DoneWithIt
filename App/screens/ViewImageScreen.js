import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import color from '../config/color';



function ViewImageScreen(props) {
    return (
        <View style = {styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30} />
            </View> 
            <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
            </View>
            <Image style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    image : {
        width : "100%",
        height : "100%",
        resizeMode : 'contain',
    },
    container : {
        backgroundColor : color.black
    },
    closeIcon : {
        position : 'absolute',
        top : 30,
        left : 30
    },
    deleteIcon : {
        position : 'absolute',
        top : 30,
        right : 30
    }
})

export default ViewImageScreen;