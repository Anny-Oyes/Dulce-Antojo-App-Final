import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
    title: string,
    image: {},
    name: string,
    price: string,

}

export const Home = ({ title, image, name, price }: Props) => {
    return (
        <View style={styles.containerTwo}>

            <View style={styles.containerImg}>
                <Text style={styles.TextOne}> {title} </Text>
                <MaterialCommunityIcons name="progress-star" style={styles.icon} />
                <Image source={image} style={styles.img} />
                <Text style={styles.NameDessert}>{name}</Text>
                <Text style={styles.Price}> {price} </Text>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textbtn}>Entrar</Text>
                </TouchableOpacity>
            </View>



        </View>
    );
};

const styles = StyleSheet.create({
    containerTwo: {
        marginLeft: 15,
        flexDirection: "row",
    },
    containerImg: {
        backgroundColor: '#EAB3B6',
        width: 250,
        height: 530,
        borderRadius: 30,
        marginTop: 30,
        marginRight: 10,
        marginBottom: 15,
    },

    TextOne: {
        marginLeft: 20,
        color: '#000000',
        fontSize: 20,
        marginTop: 60,
        fontWeight: 'bold',
    },

    icon: {
        marginTop: -50,
        fontSize: 40,
        color: '#F9F3F3',
        marginLeft: 180,
    },

    img: {
        alignSelf: 'center',
        marginTop: 80,
        width: 110,
        height: 110,
        borderRadius: 100,
        marginRight: 10,
    },
    NameDessert: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 15,
    },
    Price: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 15,
        marginTop: 25,
    },

    btn: {
        marginTop: 45,
        alignSelf: 'center',
        backgroundColor: '#F9F3F3',
        borderColor: '#EF4140',
        borderWidth: 3,
        width: '70%',
        height: 50,
        borderRadius: 10,
    },

    textbtn: {
        fontSize: 23,
        textAlign: 'center',
        marginVertical: 5,
        color: '#EF4140',
        fontWeight: 'bold',
    },
});
