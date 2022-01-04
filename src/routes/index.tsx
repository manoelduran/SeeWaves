import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';
import { useAuth } from '../hooks/auth';
import { AuthRoutes } from './auth.routes';
import { LoadAnimation } from '../components/LoadAnimation';
export function Routes() {
    const { loading, user } = useAuth()
    return (
        loading ? <LoadAnimation /> :
            <NavigationContainer>
                {user?.id ? <StackRoutes /> : <AuthRoutes />}
            </NavigationContainer>
    );
}