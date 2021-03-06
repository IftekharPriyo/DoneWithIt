import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import color from '../config/color';

function ListItemDeleteAction(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name='trash-can' size={35} color={color.white} />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : color.danger,
        width: 70,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default ListItemDeleteAction;