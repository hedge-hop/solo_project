const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ }) {
  return (
    <Layout>

      <div className="loginContainer">
        <form action="/login" method="POST" className="loginForm">
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input name="email" type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input name="password" type="password" className="form-control" id="inputPassword3" />
            </div>
            <div className="row mb-3">
              <a href="/changepass">Forgot password?</a>
            </div>
          </div>
          <button id="loginBtn" type="submit" className="btn btn-primary">Log in</button>
        </form>
        <div className="row mb-3">
          <h7>New to YogaDev?</h7>
          <a href="/register">Create an account.</a>
        </div>
        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            New to YogaDev?
            <a className="nav-link" href="/login">Create an account.</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Forgot password?</a>
          </li>
        </ul> */}
      </div>
      <script defer src="/js/loginScript.js" />
      <h1>Привет из вьюшки Login</h1>
    </Layout>
  );
};
