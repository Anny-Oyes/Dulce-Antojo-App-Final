import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
    image: {},
    title: string,
    name: string,
    price: string,

}

export const Popular = ({ image, title, name, price }: Props) => {
    return (
        <View style={styles.firstPopular}>

            <MaterialIcons name="favorite" style={styles.icon} />
            <Image source={image} style={styles.image} />

            <View style={styles.textContainer}>
                <Text style={styles.textTitle} >{title} </Text>

                <Text style={styles.textName}> {name} </Text>

                <Text style={styles.textPrice}> {price} </Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({

    icon: {
        color: '#FFFFFF',
        fontSize: 25,
        marginLeft: 320,
        marginTop: 10,
    },

    firstPopular: {
        backgroundColor: "#EAB3B6",
        width: "90%",
        height: 190,
        marginTop: 15,
        marginLeft: 20,
        marginVertical: 10,
    },

    image: {
        width: 80,
        height: 80,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 100,
    },

    textContainer: {
        alignSelf: 'center',
        marginTop: -78,
        marginLeft: 50,
    },

    textTitle: {
        fontSize: 15,
        color: "#EF4140",
        fontWeight: 'bold',
    },

    textName: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 10,
    },

    textPrice: {
        fontSize: 12,
        marginTop: 10,
    },

});