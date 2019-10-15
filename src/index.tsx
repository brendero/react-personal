import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.scss';
import axios from 'axios';
import { BaseUrl } from './config/environment';

axios.defaults.baseURL = `${BaseUrl}/api/`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

ReactDOM.render(<App />, document.getElementById('app'));