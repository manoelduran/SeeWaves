import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'
import * as api from '../../services/api';
import { CityList, Container, Header, Title, Subtitle } from './styles';
import { Loading } from '../../components/Loading';
import { CitiesList } from '../../components/CitiesList';
import { LoadAnimation } from '../../components/LoadAnimation';
import { BackButton } from '../../components/BackButton';

interface Params {
    state: State;
};
export function SelectedState() {
    const navigation = useNavigation();
    const route = useRoute();
    const { state } = route.params as Params;
    const [cities, setCities] = useState<City[]>([]);
    const [loading, setLoading] = useState(true);
    async function fetchSelectedState() {
        try {
            const listOfCities = await api.searchCities(state.abreviatura);
            setCities(listOfCities)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchSelectedState()
        return () => {
            setCities([]); // This worked for me
          };
    }, []);
    function handleSelectedState(state: State, city: City) {
        navigation.navigate('Forecast', { state, city })
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
                <BackButton onPress={handleBack} />
                <Title>
                    Você está em {'\n'}
                    {state.abreviatura}
                </Title>
                <Subtitle>
                    Selecione uma cidade:
                </Subtitle>
            </Header>
            {loading ?
                <LoadAnimation /> :
                <CityList
                    data={cities}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <CitiesList key={item.id} onPress={() => handleSelectedState(state, item)} cidade={item.cidade} id={item.id} />
                    }
                />
            }
        </Container>
    );
}