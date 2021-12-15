import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
width: 100%;
height: 126px;

margin-bottom: 16px;
padding: 24px;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: ${({theme}) => theme.colors.background_secundary};
`;
export const DataContainer = styled.View`

`;
export const CityName = styled.Text`
font-size: ${RFValue(25)}px;
font-family: ${({ theme })=> theme.fonts.medium};
color: ${({ theme }) => theme.colors.text_datails};
text-transform: uppercase;
`;