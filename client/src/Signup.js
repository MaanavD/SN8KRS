import React from 'react'

const Signup = () => {
    return (
        <div className="card bg-white mb-3">
            <div className="card-body">
              <div className="h3 pb-2 text-center">Sign up</div>
              <form>
              <div className="form-group">
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="Username"
                    id="user"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="Password"
                    id="pass"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="Password2"
                    id="pass2"
                    className="form-control"
                    placeholder="Confirm"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-block btn-primary mb-4"
                > Sign up
                </button>
              </form>
              <p className="card-text">
                <div class="separator">
                  &nbsp;&nbsp;&nbsp;OR&nbsp;&nbsp;&nbsp;
                </div>

                <button
                  type="submit"
                  className="btn btn-block shadow mt-4"
                  style={{ backgroundColor: "#FFF", color: "#333" }}
                >
                  <i className="fab fa-google float-left mt-1"></i>Sign up with
                  Google
                </button>
                <button
                  type="submit"
                  className="btn btn-block shadow mb-2 mt-3"
                  style={{ backgroundColor: "#3B5998", color: "#FFF" }}
                >
                  <i className="fab fa-facebook-f float-left mt-1"></i>Sign up
                  with Facebook
                </button>
              </p>
            </div>
          </div>
    )
}

export default Signup
