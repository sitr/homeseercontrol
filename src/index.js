import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Main from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();