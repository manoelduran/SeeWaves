import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'
import * as api from '../../services/api';
import { Container, Header, Title, Subtitle, ListDays } from './styles';
import { DaysList } from '../../components/DaysList';
import { LoadAnimation } from '../../components/LoadAnimation';
import { BackButton } from '../../components/BackButton';

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
        fetchDays();
        return () => {
            setDays([]); // This worked for me
          };
    }, []);
    function handleWaves(state: State, city: City, day: Days) {
        navigation.navigate('Waves', { city, day, state })
    }
    function handleBack(){
        navigation.goBack()
    }
    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle="dark-content"
                    translucent
                    backgroundColor="transparent"
                />
                <BackButton  onPress={handleBack} />
                <Title>
                    Você está em {'\n'}
                    {city.cidade} na {'\n'}
                    {state.abreviatura}
                </Title>
                <Subtitle>
                    Selecione um dia:
                </Subtitle>
            </Header>
            {loading ?
                <LoadAnimation /> :
                <ListDays
                    data={days}
                    keyExtractor={item => item.dia}
                    renderItem={({ item }) =>
                        <DaysList
                            dia={item.dia} onPress={() => handleWaves(state, city, item)}
                        />}
                />
            }
        </Container>
    );
}

