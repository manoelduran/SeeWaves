import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, DataContainer, Brand} from './styles';



interface DaysProps extends RectButtonProps {
    dia: string;
}

export function DaysList({ dia, ...rest }: DaysProps) {
    return (
        <Container {...rest}  >
            <DataContainer>
                <Brand> {dia} </Brand>
            </DataContainer>
        </Container>
    );
}

