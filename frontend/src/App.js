import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component.js"
import ShoesList from "./components/shoes-list.component.js";
import EditShoe from "./components/edit-shoe.component.js";
import CreateShoe from "./components/create-shoe.component.js";
import CreateUser from "./components/create-user.component.js";
import Splash from "./components/splash.component.js";

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
        <br/>
        <Route path="/" exact component={Splash} />
        <Route path="/shoes" exact component={ShoesList} />
        <Route path="/edit/:id" component={EditShoe} /> 
        <Route path="/create" component={CreateShoe} />
        <Route path="/user" component={CreateUser} />
    </div>
    </Router>
  );
}

export default App;
