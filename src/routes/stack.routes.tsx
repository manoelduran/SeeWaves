import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { SelectedState } from '../screens/SelectedState';
import { Forecast } from '../screens/Forecast';
import { Waves } from '../screens/Waves';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator  initialRouteName="Home">
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
                    gestureEnabled: false,
                }}
                component={SelectedState}
            />
                 <Screen
                name="Forecast"
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
                component={Forecast}
            />
                <Screen
                name="Waves"
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
                component={Waves}
            />
        </Navigator>
    );
}

