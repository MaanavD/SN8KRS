import React from 'react';
import './App.css';
import Splash from './Splash'
// eslint-disable-next-line
import fontawesome from '@fortawesome/fontawesome-free'
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
