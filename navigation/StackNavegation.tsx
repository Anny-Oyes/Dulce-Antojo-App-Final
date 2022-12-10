import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createStackNavigator();

export const StackNavegation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="FavoriteScreen" component={FavoritesScreen} />
        </Stack.Navigator>
    );
}