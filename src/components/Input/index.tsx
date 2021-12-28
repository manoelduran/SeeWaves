import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
    Container,
    IconContainer,
    Separetor,
    InputText
} from './styles';
import { useTheme } from 'styled-components/native';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export function Input({ iconName, value, ...rest }: InputProps) {
    const theme = useTheme();
    return (
        <Container>
            <IconContainer>
                <Feather
                    name={iconName}
                    size={24}
                    color={theme.colors.text_datails}
                />
            </IconContainer>
            <Separetor />
            <InputText
                {...rest}
            />
        </Container>
    );
}