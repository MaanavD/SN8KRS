import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ShoesList from "./components/shoes-list.component";
import Splash from './Splash'
// eslint-disable-next-line
import fontawesome from '@fortawesome/fontawesome-free'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Splash} />
        <Route path="/shoes" component={ShoesList} />
      </div>
    </Router>
  );
}

export default App;
