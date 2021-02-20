import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import color from '../config/color';
import AppText from './AppText';

const Card = (props) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source = {props.image} />
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>{props.title}</AppText>
                <AppText style={styles.subtitle}>{props.subtitle}</AppText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card : {
        borderRadius : 15,
        backgroundColor : color.white,
        marginBottom : 20,
        overflow : 'hidden'
    },
    image : { 
        width : '100%',
        height : 200
    },
    detailContainer : {
        padding : 20
    },
    title : {
        marginBottom : 7
    },
    subtitle : { 
        color : color.secondary,
        fontWeight : 'bold'
    }
})

export default Card;