import React from 'react';
import {createTheme, ThemeProvider } from '@material-ui/core';
import Home from './Home';

function App() {

  const theme = createTheme({
    spacing: 4, //Altero o valor do padding para ser 4px e não mais 8
    palette: {
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#3f51b5'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App;
