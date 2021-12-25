import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DataTable } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import { StatusBar, Text } from 'react-native'
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory-native';
import { Container, Header, Title, Subtitle, ChartContainer, Content } from './styles';
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
                        <Text>Grafico Velocidade x Horário</Text>
                        {/* <ChartContainer>
                            <VictoryChart>
                                <VictoryBar
                                    style={{ data: { fill: "white", width: 15 } }}
                                    data={[
                                        { x: day.previsoes[1].horario, y: day.previsoes[1].vento.velocidade },
                                        { x: day.previsoes[2].horario, y: day.previsoes[2].vento.velocidade },
                                        { x: day.previsoes[3].horario, y: day.previsoes[3].vento.velocidade },
                                        { x: day.previsoes[4].horario, y: day.previsoes[4].vento.velocidade },
                                        { x: day.previsoes[5].horario, y: day.previsoes[5].vento.velocidade },
                                    ]}
                                />
                                <VictoryAxis
                                    label="Horário"
                                />
                                {
                                    [day.previsoes[1].vento.velocidade, day.previsoes[2].vento.velocidade, day.previsoes[3].vento.velocidade, day.previsoes[4].vento.velocidade, day.previsoes[5].vento.velocidade].map((d, i) => {
                                        return (
                                            <VictoryAxis
                                                key={i}
                                                style={{ tickLabels: { fill: "none" } }}
                                            />

                                        );
                                    })
                                }
                            </VictoryChart>
                        </ChartContainer> */}
                        <DataTable>
                            <DataTable.Header >
                                <DataTable.Title>Horário</DataTable.Title>
                                <DataTable.Title >Direção</DataTable.Title>
                                <DataTable.Title >Velocidade</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row >
                                <DataTable.Cell>{day.previsoes[1].horario}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[1].vento.direcao}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[1].vento.velocidade}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>{day.previsoes[2].horario}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[2].vento.direcao}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[2].vento.velocidade}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>{day.previsoes[3].horario}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[3].vento.direcao}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[3].vento.velocidade}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>{day.previsoes[4].horario}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[4].vento.direcao}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[4].vento.velocidade}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>{day.previsoes[5].horario}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[5].vento.direcao}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[5].vento.velocidade}</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                        <Text>Grafico Altura x Horário</Text>
                        {/* <ChartContainer>
                            <VictoryChart>
                                <VictoryBar
                                    style={{ data: { fill: "white", width: 15 } }}
                                    data={[
                                        { x: day.previsoes[1].horario, y: day.previsoes[1].altura.distancia },
                                        { x: day.previsoes[2].horario, y: day.previsoes[2].altura.distancia },
                                        { x: day.previsoes[3].horario, y: day.previsoes[3].altura.distancia },
                                        { x: day.previsoes[4].horario, y: day.previsoes[4].altura.distancia },
                                        { x: day.previsoes[5].horario, y: day.previsoes[5].altura.distancia },
                                    ]}
                                />
                                <VictoryAxis
                                    label="Horário"
                                />
                                {
                                    [day.previsoes[1].altura.distancia, day.previsoes[2].altura.distancia, day.previsoes[3].altura.distancia, day.previsoes[4].altura.distancia, day.previsoes[5].altura.distancia].map((d, i) => {
                                        return (
                                            <VictoryAxis
                                                key={i}
                                                style={{ tickLabels: { fill: "none" } }}
                                            />
                                        );
                                    })
                                }
                            </VictoryChart>
                        </ChartContainer> */}
                        <DataTable>
                            <DataTable.Header >
                                <DataTable.Title>Horário</DataTable.Title>
                                <DataTable.Title >Direção</DataTable.Title>
                                <DataTable.Title >Distância</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row >
                                <DataTable.Cell>{day.previsoes[1].horario}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[1].altura.direcao}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[1].altura.distancia}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>{day.previsoes[2].horario}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[2].altura.direcao}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[2].altura.distancia}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>{day.previsoes[3].horario}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[3].altura.direcao}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[3].altura.distancia}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>{day.previsoes[4].horario}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[4].altura.direcao}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[4].altura.distancia}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>{day.previsoes[5].horario}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[5].altura.direcao}</DataTable.Cell>
                                <DataTable.Cell >{day.previsoes[5].altura.distancia}</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    </>
                }
            </Content>
        </Container>
    );
}