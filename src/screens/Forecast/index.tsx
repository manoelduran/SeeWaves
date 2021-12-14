import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar, Text } from 'react-native'
import * as api from '../../services/api';
import { StateList, Container } from './styles';
import { Loading } from '../../components/Loading';
import { CitiesList } from '../../components/CitiesList';
import { DaysList } from '../../components/DaysList';

interface Params {
    state: State;
    city: City;
};
export function Forecast() {
    const navigation = useNavigation();
    const route = useRoute();
    const { city, state } = route.params as Params;
    const [days, setDays] = useState<Days[]>([]);
    const [loading, setLoading] = useState(true);
    async function fetchDays() {
        try {
            const listOfDays = await api.searchDays(city.id);
            setDays(listOfDays)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchDays()
    }, []);
    function handleWaves(state: State, city: City, day: Days) {
        navigation.navigate('Waves', { state, city, day })
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
                    {days.map((day) => (
                        <DaysList key={day.dia} onPress={() => handleWaves(state, city, day)} dia={day.dia} />
                    ))}
                </>
            }
        </Container>
    );
}