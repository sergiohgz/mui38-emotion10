import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from 'emotion-theming';

import './index.css';

import theme from './theme';
import Welcome from './Welcome';

const App = () => (
  <CssBaseline>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Welcome />
      </ThemeProvider>
    </MuiThemeProvider>
  </CssBaseline>
);

ReactDOM.render(<App />, document.getElementById('root'));
