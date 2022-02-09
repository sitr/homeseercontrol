import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/music.scss';
import './styles/outdoor.scss';
import './styles/button.scss';
import './styles/house.scss';
import './styles/panels.scss';
import './styles/colors.scss';
import './styles/dimensions.scss'

import Main from './pages/Main';
import Music from './pages/Music';
import Outdoor from './pages/Outdoor';
import House from './pages/House';
import {  BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
   <Router>
      <div>
         <Route exact path="/" component={Main} />
         <Route path="/music" component={Music} />
         <Route path="/outdoor" component={Outdoor} />
         <Route path="/house" component={House} />
      </div>
   </Router>,
   document.getElementById('root'));
registerServiceWorker();