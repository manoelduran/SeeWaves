import { useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useState } from 'react';
import { StatusBar, Text } from 'react-native'
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory-native';
import { Container, Header, Title, Subtitle, ChartContainer, Content } from './styles';
interface Params {
    state: State
    day: Days;
    city: City;
};
export function Waves() {
    const route = useRoute();
    const { state, city, day } = route.params as Params;
    console.log(day.previsoes[0].vento.velocidade, day.previsoes[1].vento.velocidade, day.previsoes[2].vento.velocidade, day.previsoes[3].vento.velocidade)
    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle="dark-content"
                    translucent
                    backgroundColor="transparent"
                />
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
            <Text>Grafico Velocidade x Horário</Text>
                <ChartContainer>
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
                                    <VictoryAxis dependentAxis
                                        key={i}
                                        label={d}
                                        style={{ tickLabels: { fill: "none" } }}
                                        axisValue={d}
                                    />
                                );
                            })
                        }
                    </VictoryChart>
                </ChartContainer>
                <Text></Text>
                <Text>Grafico Altura x Horário</Text>
                <ChartContainer>
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
                                    <VictoryAxis dependentAxis
                                        key={i}
                                        label={d}
                                        style={{ tickLabels: { fill: "none" } }}
                                        axisValue={d}
                                    />
                                );
                            })
                        }
                    </VictoryChart>
                </ChartContainer>
            </Content>
        </Container>
    );
}