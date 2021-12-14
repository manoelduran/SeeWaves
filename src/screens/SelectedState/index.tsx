import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar, Text } from 'react-native'
import * as api from '../../services/api';
import { StateList, Container } from './styles';
import { Loading } from '../../components/Loading';
import { CitiesList } from '../../components/CitiesList';

interface Params {
    state: State;
};
export function SelectedState() {
    const navigation = useNavigation();
    const route = useRoute();
    const {state} = route.params as Params;
    const [cidades, setCidades] = useState<City[]>([]);
    const [loading, setLoading] = useState(true);
    async function fetchSelectedState() {
        try {
            const listOfCities = await api.searchCities(state.abreviatura);
            setCidades(listOfCities)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
       fetchSelectedState()
    }, []);
    function handleSelectedState(state: State, city: City){
        navigation.navigate('Forecast', { state , city})
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
                    {cidades.map((city) => (
                        <CitiesList key={city.id}  onPress={() => handleSelectedState(state, city)} cidade={city.cidade} id={city.id}  />
                    ))

                    }
                    </>
            }
        </Container>
    );
}