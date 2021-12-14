import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar, Text } from 'react-native'
import * as api from '../../services/api';
import { StateList, Container } from './styles';
import { Loading } from '../../components/Loading';
import { WaveCard } from '../../components/WaveCard';

interface Params {
    state: State;
    city: City;
    day: Days;
};
export function Waves() {
    const navigation = useNavigation();
    const route = useRoute();
    const { city, state, day } = route.params as Params;
    const [waves, setWaves] = useState<Days[]>([]);
    const [loading, setLoading] = useState(true);
    async function fetchWaves() {
        try {
            const prevision = await api.searchWaves(city.id);
            console.log(prevision)
            setWaves(prevision)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchWaves()
    }, []);
    function handleWaves(state: State, city: City, day: Days) {
    }
    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Text> {state.abreviatura} </Text>
            {loading ?
                <Loading /> :
                <>
                    {waves.map((wave) => (
                        <WaveCard onPress={() => { }} altura={wave.previsoes[Number(day.dia)].altura} forca={wave.previsoes[Number(day.dia)].forca} horario={wave.previsoes[Number(day.dia)].horario} vento={wave.previsoes[Number(day.dia)].vento} />
                    ))}
                </>
            }
        </Container>
    );
}