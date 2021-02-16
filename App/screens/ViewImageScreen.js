import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import color from '../config/color';


function ViewImageScreen(props) {
    return (
        <View style = {styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    image : {
        width : "100%",
        height : "100%",
        resizeMode : 'contain'
    },
    container : {
        backgroundColor : color.black
    },
    closeIcon : {
        width : 70,
        height : 35,
        backgroundColor : color.primary,
        position : 'absolute',
        top : 30,
        left : 30
    },
    deleteIcon : {
        width : 70,
        height : 35,
        backgroundColor : color.secondary,
        position : 'absolute',
        top : 30,
        right : 30
    }
})

export default ViewImageScreen;