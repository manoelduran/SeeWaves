import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DataTable } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'
import { Container, Header, Title, Subtitle, ChartContainer, Content, TabelLabel, Tabel, TextTabel, TextValue } from './styles';
import { BackButton } from '../../components/BackButton';
import { LoadAnimation } from '../../components/LoadAnimation';
interface Params {
    state: State
    day: Days;
    city: City;
};
export function Waves() {
    const navigation = useNavigation<any>();
    const route = useRoute();
    const { state, city, day } = route.params as Params;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        try {
            day
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }, []);
    function handleBack() {
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
                    {city.cidade} na {'\n'}
                    {state.abreviatura} {'\n'}
                    no dia {format(new Date(day.dia), 'dd/MM/yy', { locale: ptBR })}
                </Title>
                <Subtitle>
                    Veja a previsão abaixo:
                </Subtitle>
            </Header>
            <Content>
                {loading ?
                    <LoadAnimation /> :
                    <>
                        <ChartContainer>
                            <TabelLabel>Tabela Horário x Direção x Velocidade</TabelLabel>
                        </ChartContainer>
                        <DataTable >
                            <Tabel>
                                <DataTable.Header  >
                                    <DataTable.Title >
                                        <TextTabel  >Horário</TextTabel>
                                    </DataTable.Title>
                                    <DataTable.Title >
                                        <TextTabel  >Direção</TextTabel>
                                    </DataTable.Title>
                                    <DataTable.Title >
                                        <TextTabel  >Velocidade</TextTabel>
                                    </DataTable.Title>
                                </DataTable.Header>
                                <DataTable.Row >
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[1].horario}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[1].vento.direcao}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[1].vento.velocidade}
                                        </TextValue>
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>
                                        <TextValue>
                                            {day.previsoes[2].horario}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[2].vento.direcao}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[2].vento.velocidade}
                                        </TextValue>
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>
                                        <TextValue>
                                            {day.previsoes[3].horario}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[3].vento.direcao}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[3].vento.velocidade}
                                        </TextValue>
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>
                                        <TextValue>
                                            {day.previsoes[4].horario}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[4].vento.direcao}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[4].vento.velocidade}
                                        </TextValue>
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>
                                        <TextValue>
                                            {day.previsoes[5].horario}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[5].vento.direcao}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[5].vento.velocidade}
                                        </TextValue>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            </Tabel>
                        </DataTable>
                        <ChartContainer>
                            <TabelLabel>Tabela Horário x Direção x Altura</TabelLabel>
                        </ChartContainer>
                        <DataTable >
                            <Tabel>
                                <DataTable.Header >
                                    <DataTable.Title >
                                        <TextTabel  >Horário</TextTabel>
                                    </DataTable.Title>
                                    <DataTable.Title >
                                        <TextTabel  >Direção</TextTabel>
                                    </DataTable.Title>
                                    <DataTable.Title >
                                        <TextTabel  >Distância</TextTabel>
                                    </DataTable.Title>
                                </DataTable.Header>
                                <DataTable.Row >
                                    <DataTable.Cell>
                                        <TextValue>
                                            {day.previsoes[1].horario}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[1].altura.direcao}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[1].altura.distancia}
                                        </TextValue>
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>
                                        <TextValue>
                                            {day.previsoes[2].horario}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[2].altura.direcao}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[2].altura.distancia}
                                        </TextValue>
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>
                                        <TextValue>
                                            {day.previsoes[3].horario}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[3].altura.direcao}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[3].altura.distancia}
                                        </TextValue>
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>
                                        <TextValue>
                                            {day.previsoes[4].horario}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[4].altura.direcao}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[4].altura.distancia}
                                        </TextValue>
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>
                                        <TextValue>
                                            {day.previsoes[5].horario}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[5].altura.direcao}
                                        </TextValue>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <TextValue>
                                            {day.previsoes[5].altura.distancia}
                                        </TextValue>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            </Tabel>
                        </DataTable>
                    </>
                }
            </Content>
        </Container>
    );
}