import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'fontsource-roboto';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter> 
        <ThemeProvider theme={theme}> 
          <App />
        </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);