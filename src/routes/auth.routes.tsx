import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator initialRouteName="Splash">
            <Screen
                name="Splash"
                options={{
                    headerShown: false
                }}
                component={Splash}
            />
            <Screen
                name="SignIn"
                options={{
                    headerShown: false,
                }}
                component={SignIn}
            />
        </Navigator>
    );
}

