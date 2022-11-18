const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ }) {
  return (
    <Layout>

      <div className="loginContainer">
        <div className="float-rigth">
          <img src="https://cdn.dribbble.com/userupload/2619345/file/still-438b7e4cca7e78897fc05a51e42394ce.png?compress=1&resize=400x300&vertical=top" alt="useraccpic" className="loginpic" />
        </div>
        <br />
        <hr />
        <div>
          <h3>Login form:</h3>
        </div>

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
            <div>
              <a href="/changepass">Forgot password?</a>
            </div>
          </div>
          <hr />
          <div>
            <div>
              <h7>New to YogaDev?</h7>
              {' '}
              <a href="/register">Create an account.</a>
            </div>
          </div>
          <hr />
          <div>
            <button id="loginBtn" type="submit" className="btn btn-primary">Log in</button>
          </div>

        </form>

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
    </Layout>
  );
};
