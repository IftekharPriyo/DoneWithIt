import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import color from '../config/color';
import AppText from './AppText';


const ListItem = ({title, subtitle, image, onPress, renderRightActions}) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={color.light} onPress={onPress}>
        <View style={styles.container}>
            <Image style={styles.image} source={image}></Image>
            <View style ={styles.texts}>
                <AppText>{title}</AppText>
                <AppText>{subtitle}</AppText>
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        marginVertical : 15,
        marginLeft : -5
    },
    image : {
        width : 70,
        height : 70, 
        borderRadius : 35,
        marginRight : 10
    },
    texts : {
        marginVertical : 10
    }
})

export default ListItem;