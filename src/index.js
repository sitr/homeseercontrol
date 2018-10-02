import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/music.css';
import App from './app';
import Music from './components/Music';
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
   <Router>
      <div>
         <Route exact path="/" component={App} />
         <Route path="/music" component={Music} />
      </div>
   </Router>,
   document.getElementById('root'));
registerServiceWorker();