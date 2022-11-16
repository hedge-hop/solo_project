const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ }) {
  return (
    <Layout>
      <div className="loginContainer">
        {/*  <form action="/login" method="POST">
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input name="email" type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form> */}
        <h3>Registration form:</h3>
        <form action="/register" method="POST" className="registerForm">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">First name</label>
            <input name="firstname" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Last name</label>
            <input name="lastname" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Cellphone</label>
            <input name="cellphone" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Enter Password</label>
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="****" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Confirm Password</label>
            <input name="passwordconfirm" type="password" className="form-control" id="exampleFormControlInput1" placeholder="****" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <h1>Привет из вьюшки UserAccount</h1>
      <script defer src="/js/regScript.js" />
    </Layout>
  );
};
