import { StyleSheet, ScrollView } from 'react-native';
import { TitlePopular } from '../components/Popular/TitlePopular';
import { Popular } from '../components/Popular/Popular';

export default function PopularScreen() {
    return (

        <ScrollView>
            <TitlePopular />

            <Popular
                title={'Postres con chocolate'}
                image={require("../images/Crepas.jpg")}
                name={'Crepa de nutela con \n chocolate'}
                price={'Precio: C$100'}
            />

            <Popular
                title={'Postres con vainilla'}
                image={require("../images/Flan.jpg")}
                name={'Flan con \n Vainilla'}
                price={'Precio: C$50'}
            />

            <Popular
                title={'Postres con Fresa'}
                image={require("../images/Mousses.jpg")}
                name={'Mousse con \n fresa'}
                price={'Precio: C$150'}
            />


            <Popular
                title={'Postres con limón'}
                image={require("../images/pie.jpeg")}
                name={'Pie de limón y \n vainilla'}
                price={'Precio: C$140'}
            />

            <Popular
                title={'Postres con Crema'}
                image={require("../images/tiramisu.jpg")}
                name={'Tiramissu con \n Crema'}
                price={'Precio: C$90'}
            />


            <Popular
                title={'Postres con chocolate'}
                image={require("../images/Crepas.jpg")}
                name={'Crepa de nutela con \n chocolate'}
                price={'Precio: C$100'}
            />
        </ScrollView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F3F3',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleOne: {
        marginTop: 200,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#EF4140'
    },

    containerScroll: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F3F3',
    },

});
