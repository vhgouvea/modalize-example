import { Routes } from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetProvider } from './src/context/useBottomSheet';
import theme from './src/theme';
import { ThemeProvider } from 'styled-components';

export default function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetProvider>
          <Routes />
        </BottomSheetProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}

