import { StyleSheet, ScrollView } from 'react-native';
import { Home } from '../components/Home/Home';
import { TitleHome } from '../components/Home/TitleHome';

export default function HomeScreen() {
    return (

        <ScrollView>
            <TitleHome />

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.containerScroll}
            >
                <Home
                    title={'Postres con \n chocolate'}
                    image={require("../images/Crepas.jpg")}
                    name={'Crepa de nutela con \n chocolate'}
                    price={'Precio: C$100'}
                />

                <Home
                    title={'Postres con \n vainilla'}
                    image={require("../images/Flan.jpg")}
                    name={'Flan con \n Vainilla'}
                    price={'Precio: C$50'}
                />

                <Home
                    title={'Postres con \n Fresa'}
                    image={require("../images/Mousses.jpg")}
                    name={'Mousse con \n fresa'}
                    price={'Precio: C$150'}
                />


                <Home
                    title={'Postres con \n limón'}
                    image={require("../images/pie.jpeg")}
                    name={'Pie de limón y \n vainilla'}
                    price={'Precio: C$140'}
                />

                <Home
                    title={'Postres con \n Crema'}
                    image={require("../images/tiramisu.jpg")}
                    name={'Tiramissu con \n Crema'}
                    price={'Precio: C$90'}
                />


                <Home
                    title={'Postres con \n chocolate'}
                    image={require("../images/Crepas.jpg")}
                    name={'Crepa de nutela con \n chocolate'}
                    price={'Precio: C$100'}
                />
            </ScrollView>

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
