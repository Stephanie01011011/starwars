import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffc107'
    },
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <ThemeProvider theme={theme}>
    <Routes>
   
      <Route path='/' element={<App />}/>
      <Route path='/about' element={<App />}/>
      <Route path='/another' element={<App />}/>
    </Routes>
    </ThemeProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

