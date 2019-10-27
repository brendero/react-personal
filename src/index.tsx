import React from 'react';
import ReactGA from 'react-ga';
import { analyticsKey } from '../config/keys';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.scss';
import axios from 'axios';
import { BaseUrl } from './config/environment';

ReactGA.initialize(analyticsKey);
axios.defaults.baseURL = `${BaseUrl}/api/`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(<App />, document.getElementById('root'));