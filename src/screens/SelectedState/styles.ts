import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
width: 100%;
height: 325px;
background-color: ${({ theme }) => theme.colors.header};
justify-content: center;
padding: 25px;
padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
font-size: ${RFValue(30)}px;
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.shape};
margin-top: 24px;
`;

export const Subtitle = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.shape};
margin-top: 24px;
`;

export const CityList = styled(FlatList as new () =>FlatList<{estado: {cidades: City[]}}>).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
    })`
    `;
