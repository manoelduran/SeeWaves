import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, DataContainer, Brand } from './styles';



interface WaveProps extends RectButtonProps {
    horario: string;
    forca: string;
    altura: {
        distancia: number;
        direcao: string;
    }
    vento: {
        velocidade: number;
        direcao: string;
    }
}

export function WaveCard({ altura, forca, horario, vento, ...rest }: WaveProps) {
    return (
        <Container {...rest}  >
            <DataContainer>
            <Brand> {horario} </Brand>
            <Brand> {vento.direcao} </Brand>
            <Brand> {vento.velocidade} </Brand>
            <Brand> {altura.direcao} </Brand>
            <Brand> {altura.distancia} </Brand>
            <Brand> {forca} </Brand>
            </DataContainer>
        </Container>
    );
}

