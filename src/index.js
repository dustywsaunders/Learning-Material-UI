import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { red, amber } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber.A400,
      light: amber[100],
      dark: amber[800]
    },
    type: 'dark'
  },
  spacing: {
    unit: 10
  }
})

render(
<MuiThemeProvider theme={theme}>
  <App />
</MuiThemeProvider>, document.getElementById('root'));
