import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/music.scss';
import './styles/outdoor.scss';
import './styles/button.scss';
import './styles/house.scss';

import App from './app';
import Music from './components/Music';
import Outdoor from './components/Outdoor';
import House from './components/House';
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
   <Router>
      <div>
         <Route exact path="/" component={App} />
         <Route path="/music" component={Music} />
         <Route path="/outdoor" component={Outdoor} />
         <Route path="/house" component={House} />
      </div>
   </Router>,
   document.getElementById('root'));
registerServiceWorker();