import React from 'react';
import {createRoot} from 'react-dom/client';
//import Home from './containers/Home';
//import Order from './containers/Order';
import Routers from './routes';
import GlobalStyles from './Styles/globalStyles'

const rootElement =  document.getElementById('root');
const root =  createRoot(rootElement);


root.render(
  <>
  <Routers/> 
  <GlobalStyles/> 
  </>
  );
