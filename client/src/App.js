import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ShoesList from "./components/shoes-list.component";

function App() {
  return (
    <Router>
      <div>
        <Route path="/shoes" component={ShoesList} />
      </div>
    </Router>
  );
}

export default App;
