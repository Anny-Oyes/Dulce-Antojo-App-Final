import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export const TitleFavorite = () => {
    return (

        <View style={styles.container}>
            <Text style={styles.titleOne}>My Favorite Desserts </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#F9F3F3',
    },

    titleOne: {
        alignSelf: 'center',
        marginTop: 60,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#EF4140'
    },
});
