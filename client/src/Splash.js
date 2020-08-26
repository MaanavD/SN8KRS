import React, { useState } from "react";
import Login from './Login'
import Signup from './Signup'

const Splash = () => {
const [login, setLogin] = useState(true);
const setLog = () => {
    if (login) {
        setLogin(false)
    } else {
        setLogin(true)
    }
}
  return (
    <div className="container">
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-lg-7 align-self-center">
          <h1 className="display-1 nowrap">
            SN<span className="text-primary">8</span>KRS{" "}
            <i className="fas fa-shoe-prints text-primary"></i>
          </h1>
          <p style={{ fontSize: "2rem" }} className="lead">
            A world of shoes, at your fingertips
          </p>
        </div>
        <div className="col-lg-5 align-self-center">
        {login? <Login></Login> : <Signup></Signup> }
          <div className="card bg-light mb-3">
            <div className="card-body">
              {login ? <p className="card-text lead text-center">
                Don't have an account?{" "}
                  <label type="button" className="btn btn-link mt-1" onClick={setLog}>Sign up</label>
              </p> : <p className="card-text lead text-center">
                Have an account?{" "}
                <label type="button" className="btn btn-link mt-1" onClick={setLog}>Log in</label>
              </p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
