import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export const TitleDescription = () => {
    return (

        <View style={styles.container}>
            <Text style={styles.titleOne}>Dessert description</Text>
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