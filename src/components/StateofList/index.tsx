import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, DataContainer, Brand, Name } from './styles';



interface StateProps extends RectButtonProps {
    abreviatura: string;
}

export function StateofList({abreviatura, ...rest}: StateProps) {
    return (
        <Container  {...rest}  >
            <DataContainer>
                <Brand>{abreviatura}</Brand>
            </DataContainer>
        </Container>
    );
}

