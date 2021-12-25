import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import SeeSvg from '../../assets/see.svg';
import { BackHandler, StatusBar } from 'react-native';
import { StateofList } from '../../components/StateofList';
import * as api from '../../services/api';
import { StateList, Container, Header, Title, Subtitle, Logo } from './styles';
import { LoadAnimation } from '../../components/LoadAnimation';


export function Home() {
    const navigation = useNavigation<any>();
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
        return () => {
            setList([]); // This worked for me
        };
    }, []);
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        })
    }, []) // faz n voltar para a tela de splash
    function handleSelectedState(state: State) {
        navigation.navigate('SelectedState', { state })
    }
    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle="dark-content"
                    translucent
                    backgroundColor="transparent"
                />
                <Title>
                    Bem vindo {'\n'}
                    ao {'\n'}
                </Title>
                <Logo
                    source={{ uri: 'https://github.com/manoelduran.png' }}
                />
                <Subtitle>
                    Selecione um estado:
                </Subtitle>
            </Header>
            {loading ?
                <LoadAnimation /> :
                <StateList
                    data={list}
                    keyExtractor={(item: State) => item.abreviatura}
                    renderItem={({ item }: any) =>
                        <StateofList key={item.abreviatura} abreviatura={item.abreviatura} onPress={() => handleSelectedState(item)} />}
                />
            }
        </Container>
    );
}