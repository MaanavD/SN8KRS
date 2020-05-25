import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component.js"
import shoesList from "./components/shoes-list.component.js";
import editShoe from "./components/edit-shoe.component.js";
import createShoe from "./components/create-shoe.component.js";
import CreateUser from "./components/create-user.component.js";

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
        <br/>
        <Route path="/" exact component={shoesList} />
        <Route path="/edit/:id" component={editShoe} /> 
        <Route path="/create" component={createShoe} />
        <Route path="/user" component={CreateUser} />
    </div>
    </Router>
  );
}

export default App;
