
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { DessertDescription } from '../components/Description/DessertDescription';
import { TitleDescription } from '../components/Description/TitleDescription';

export default function DescriptionScreen() {
    return (
        <ScrollView>
            <TitleDescription />

            <ScrollView
                style={styles.containerScroll}
            >
                <DessertDescription
                    image={require("../images/Crepas.jpg")}
                    name={'Crepa de nutela con chocolate'}
                    ingredients={'100 g de avellanas tostadas sin cáscara, 100 ml de leche descremada, 50 ml de aceite vegetal (canola, soya, girasol, oliva o con 50 g de cacao en polvo sin azúcar, 1 cucharada de stevia o 2 cucharadas de sucralosa, 1 cucharadita de extracto de vainilla'}
                    price={'Tres crepas a C$100'}
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
    },

    containerScroll: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F3F3',
    },

});