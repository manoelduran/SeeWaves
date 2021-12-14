import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, DataContainer, Brand, Name } from './styles';



interface CitiesProps extends RectButtonProps {
    cidade: string;
    id?: string;
}

export function CitiesList({ cidade, ...rest }: CitiesProps) {
    return (
        <Container {...rest}  >
            <DataContainer>
                <Brand> {cidade} </Brand>
            </DataContainer>
        </Container>
    );
}

