import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { BackHandler, StatusBar } from 'react-native'
import { StateofList } from '../../components/StateofList';
import * as api from '../../services/api';
import { StateList, Container } from './styles';
import { Loading } from '../../components/Loading';


export function Home() {
    const navigation = useNavigation();
    const [list, setList] = useState<State[]>([]);
    const [loading, setLoading] = useState(true);
    async function fetchStateList() {
        try {
            const listOfStates = await api.searchStates();
            setList(listOfStates)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchStateList()
    }, []);
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        })
    }, []) // faz n voltar para a tela de splash
    function handleSelectedState(state: State){
        navigation.navigate('SelectedState', { state})
    }
    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            {loading ?
                <Loading /> :
                <StateList
                    data={list}
                    keyExtractor={item => item.abreviatura}
                    renderItem={({ item }) =>
                        <StateofList key={item.abreviatura} abreviatura={item.abreviatura} detalhes={item.detalhes} onPress={() => handleSelectedState(item)} />}
                />
            }
        </Container>
    );
}