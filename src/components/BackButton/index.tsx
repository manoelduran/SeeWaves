import React from 'react';
import {Container} from './styles'
import {MaterialIcons} from '@expo/vector-icons'
import { useTheme } from 'styled-components';

interface BackButtonProps {
    color?: string;
}

export function BackButton({color, ...rest}: BackButtonProps){
    const theme = useTheme();
    return (
        <Container   {...rest}>
            <MaterialIcons
            name="chevron-left"
            size={24}
            color={color ? color : theme.colors.shape}
            />
        </Container>
    );
}