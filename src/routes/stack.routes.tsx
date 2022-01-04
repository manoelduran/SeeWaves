import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { SelectedState } from '../screens/SelectedState';
import { Forecast } from '../screens/Forecast';
import { Waves } from '../screens/Waves';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator initialRouteName="Home">
            <Screen
                name="Home"
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
                component={Home}
            />
            <Screen
                name="SelectedState"
                options={{
                    headerShown: false,
                }}
                component={SelectedState}
            />
            <Screen
                name="Forecast"
                options={{
                    headerShown: false,
                }}
                component={Forecast}
            />
            <Screen
                name="Waves"
                options={{
                    headerShown: false,
                }}
                component={Waves}
            />
        </Navigator>
    );
}

