import React from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from './Splash'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

function App() {
  return (
    <div className="App">
      <Splash></Splash>
    </div>
  );
}

export default App;
