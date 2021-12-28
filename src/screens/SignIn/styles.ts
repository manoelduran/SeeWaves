import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.colors.background_secundary};
`;

export const Header = styled.View`
width: 100%;
height: 325px;
background-color: ${({ theme }) => theme.colors.header};
justify-content: center;
align-items: center;
padding: 25px;
padding-top: ${getStatusBarHeight() + 30}px;
`;
export const HeaderImage = styled.Image`
width: 200px;
height: 200px;
`;
export const Content = styled.View`
padding: 25px;
flex: 1;
align-items: center;
justify-content: center;
background-color: ${({theme}) => theme.colors.background_primary};
`;
export const Input = styled.TextInput`
background-color: ${({theme}) => theme.colors.shape};
color: ${({theme}) => theme.colors.title};

`;

export const PasswordInput = styled.TextInput`
margin-top: 10px;
background-color: ${({theme}) => theme.colors.shape};
color: ${({theme}) => theme.colors.title};
`;