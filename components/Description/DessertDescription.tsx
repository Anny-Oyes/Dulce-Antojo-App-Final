import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
    image: {},
    name: string,
    ingredients: string,
    price: string,

}

export const DessertDescription = ({ image, name, ingredients, price }: Props) => {
    return (
        <View>

            <Image source={image} style={styles.images} />

            <Text style={styles.titleTwo}> {name} </Text>

            <View style={styles.containerIng}>

                <Text style={styles.titleThree}> Ingredientes: </Text>

                <Text style={styles.textIng}> {ingredients} </Text>

                <View style={styles.containerIcon}>
                    <MaterialCommunityIcons name="progress-star" style={styles.icon} />

                    <MaterialCommunityIcons name="progress-star" style={styles.icon} />

                    <MaterialCommunityIcons name="progress-star" style={styles.icon} />

                    <MaterialCommunityIcons name="progress-star" style={styles.icon} />

                    <MaterialCommunityIcons name="progress-star" style={styles.icon} />

                </View>

            </View>

            <Text style={styles.titleThree}> Precio: </Text>

            <Text style={styles.textDescripion}> {price} </Text>

            <TouchableOpacity style={styles.btns}>
                <Text style={styles.text}>Salir</Text>
            </TouchableOpacity>

        </View>


    );
};

const styles = StyleSheet.create({
    images: {
        marginLeft: 10,
        height: 400,
        width: '95%',
        marginTop: 10,
        borderRadius: 20,
        borderWidth: 6,
        borderColor: '#EAB3B6',
    },

    titleTwo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },

    textDescripion: {
        fontSize: 15,
        marginTop: -10,
        textAlign: 'center'
    },

    containerIng: {
        marginTop: 20,
        alignSelf: 'center',
        width: '95%',
    },

    titleThree: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginVertical: 20,
    },

    textIng: {
        fontSize: 15,
    },

    containerIcon: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 10,
    },

    icon: {
        fontSize: 25,
        marginTop: 15,
        marginVertical: 10,
        color: '#EF4140',
    },

    btns: {
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#EF4140',
        width: '85%',
        height: 50,
        borderRadius: 10,
        marginVertical: 20,
    },

    text: {
        fontSize: 23,
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});