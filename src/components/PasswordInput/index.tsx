import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import {
    Container,
    IconContainer,
    Separetor,
    InputText,
    ChangePasswordVisibilityButton
} from './styles';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: InputProps) {
    const [isVisible, setIsVisible] = useState(true);
    const theme = useTheme();
    function handleVisiblePassword() {
        setIsVisible(oldState => !oldState);
    }
    return (
        <Container

        >
            <IconContainer
            >
                <Feather
                    name={iconName}
                    size={24}
                    color={theme.colors.text_datails}
                />
            </IconContainer>
            <Separetor
            />
            <InputText
                {...rest}
                autoCorrect={false}
                secureTextEntry={isVisible ? false : true}
            />
            <ChangePasswordVisibilityButton
                onPress={handleVisiblePassword}
            >
                <Feather
                    name={isVisible ? 'eye' : 'eye-off'}
                    size={24}
                    color={theme.colors.text_datails}
                />
            </ChangePasswordVisibilityButton>
        </Container>
    );
}