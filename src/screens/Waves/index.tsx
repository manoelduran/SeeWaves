import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StatusBar, Text } from 'react-native'
import { Container } from './styles';
interface Params {
    day: Days;
    city: City;
};
export function Waves() {
    const route = useRoute();
    const { city, day } = route.params as Params;
    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Text>{day.previsoes[0].vento.velocidade} </Text>
            <Text>{day.previsoes[1].vento.velocidade} </Text>
            <Text>{day.previsoes[2].vento.velocidade} </Text>
        </Container>
    );
}