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
export const Content = styled.ScrollView`
width: 100%;
`;
export const ChartContainer = styled.View`
width: 100%;
align-items: center;
justify-content: center;
padding: 25px;
`;

export const TabelLabel = styled.Text`
font-size: ${RFValue(30)}px;
text-align: center;
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.title};
margin-top: 24px;
`;

export const Tabel = styled.View`
max-width: 100%;
background-color: ${({theme}) => theme.colors.text_datails};
border-radius: 50px ;
padding: 20px;
`;

export const TextTabel = styled.Text`
color: ${({theme}) => theme.colors.shape};
font-size: ${RFValue(17)}px;
`;

export const TextValue = styled.Text`
color: ${({theme}) => theme.colors.shape};
font-size: ${RFValue(15)}px;
`;
