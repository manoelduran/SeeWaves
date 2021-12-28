import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonProps {
    color: string
}
interface ButtonTextProps {
    light: boolean;
}
export const Container = styled(RectButton) <ButtonProps>`
width: 100%;
padding: 19px;
justify-content: center;
align-items: center;
background-color: ${({ color }) => color};
margin-top: 30px;
`;

export const Title = styled.Text<ButtonTextProps>`
font-family: ${({ theme }) => theme.fonts.medium};
font-size: ${RFValue(15)}px;
color: ${({ theme, light }) => light ? theme.colors.title : theme.colors.shape}
`;