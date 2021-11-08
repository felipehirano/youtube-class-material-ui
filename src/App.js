import React, { useState } from 'react';
import {createTheme, ThemeProvider } from '@material-ui/core';
import Home from './Home';

function App() {

  const [darkMode, setDarkMode] = useState();

  const theme = createTheme({
    spacing: 4, //Altero o valor do padding para ser 4px e não mais 8
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        paper: darkMode ? '#232323' : '#FFF',
        body: darkMode ? '#181818' : '#f4f6f8',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  )
}

export default App;
