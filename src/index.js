import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Containers/App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Provider } from "react-redux";
import store from './store/store';

const root = ReactDOM.createRoot(
   document.getElementById('root')
);

const theme = createTheme({
   palette: {
      type: 'light',
      primary: {
         main: '#F85C1C',
         dark: '#b93a07',
         light: '#f9723f',
      },
      secondary: {
         main: '#c10015',
         dark: '#d10021',
      },
      background: {
         default: '#f7f5f5',
         paper: '#FAFAFA',
      },
   },
   typography: {
      fontFamily: 'Fredoka',
      fontSize: 15,
   },
});


root.render(
   <Provider store={store}>
      <ThemeProvider theme={theme}>
         <App />
      </ThemeProvider>
   </Provider>
);

reportWebVitals();
