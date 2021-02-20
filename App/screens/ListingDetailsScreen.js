import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import color from '../config/color';

const ListingDetailsScreen = () => {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}></Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket For Sale</AppText>
                <AppText style={styles.price}>$100</AppText> 
                <ListItem style={{paddingTop : 20}} image = {require('../assets/nihalBai.jpg')} title = "Nihal" subtitle = "2 Listings" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image : {
        width : "100%",
        height : 300
    }, 
    detailsContainer : {
        paddingLeft : 20,
        marginTop : 30
    },
    title : {
        fontSize : 24,
        fontWeight : "500"
    },
    price : {
        color : color.secondary,
        fontWeight : 'bold',
        fontSize : 20,
        paddingTop : 5
    }
})

export default ListingDetailsScreen;