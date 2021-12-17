import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, DataContainer, Brand } from './styles';



interface DaysProps extends RectButtonProps {
    dia: string;
}

export function DaysList({ dia, ...rest }: DaysProps) {
    return (
        <Container {...rest}  >
            <DataContainer>
                <Brand> {format(new Date(dia), 'dd/MMMM/yyyy', { locale: ptBR })} </Brand>
            </DataContainer>
        </Container>
    );
}

