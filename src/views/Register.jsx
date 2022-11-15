const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ }) {
  return (
    <Layout>
      <div className="loginContainer">
        <form action="/login" method="POST">
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input name="email" type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
