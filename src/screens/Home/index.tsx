import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Alert, BackHandler, StatusBar } from 'react-native';
import { StateofList } from '../../components/StateofList';
import * as api from '../../services/api';
import { StateList, Container, Header, Title, Subtitle, LogoutButton, RowDiv } from './styles';
import { LoadAnimation } from '../../components/LoadAnimation';
import { useAuth } from '../../hooks/auth';
import { useTheme } from 'styled-components/native';


export function Home() {
    const { signOut } = useAuth();
    const navigation = useNavigation<any>();
    const theme = useTheme();
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

    async function handleSignOut() {
        Alert.alert('Tem certeza',
            'Se você sair, irá precisar de internet para conectar-se novamente.',
            [
                {
                    text: 'Cancelar',
                    onPress: () => { },
                    style: 'cancel'
                },
                {
                    text: 'Sair',
                    onPress: () => signOut()
                }
            ]
        );
    };

    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle="dark-content"
                    translucent
                    backgroundColor="transparent"
                />
                <RowDiv>
                    <Title>
                        Bem vindo {'\n'}
                        ao {'\n'}
                        SeeWaves
                    </Title>
                    <LogoutButton onPress={handleSignOut}  >
                        <Feather
                            name="power"
                            color={theme.colors.shape}
                            size={24}
                        />
                    </LogoutButton>
                </RowDiv>
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