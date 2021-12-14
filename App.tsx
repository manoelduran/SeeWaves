import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import {Routes} from './src/routes/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes/>
      </ThemeProvider>
    </>
  );
}