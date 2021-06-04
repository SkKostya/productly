import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyles from "./styles/global";
import GlobalFonts from "./styles/fonts";

ReactDOM.render(
  <>
    <GlobalStyles />
    <GlobalFonts />
    <App />
  </>,
  document.getElementById('root')
);
