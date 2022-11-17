const React = require('react');
const Layout = require('./Layout');

module.exports = function UserAcc({ user }) {
  return (
    <Layout user={user}>
      <link rel="stylesheet" href="/css/styles.css" />
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Personal info</button>
          <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">favourite postures</button>
          <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Create sequence</button>
          <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
          <div className="loginContainer">
            <form action="/userpage" method="POST" className="userAccForm">
              <div className="mb-3">
                {/* <label htmlFor="exampleInputEmail1" className="form-label">First name</label> */}
                <span className="input-group-text" id="addon-wrapping">@First name</span>
                <input name="firstname" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={user.firstname} />
              </div>
              <div className="mb-3">
                {/* <label htmlFor="exampleInputEmail1" className="form-label">Last name</label> */}
                <span className="input-group-text" id="addon-wrapping">@Last name</span>
                <input name="lastname" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={user.lastname} />
              </div>
              <div className="mb-3">
                {/* <label htmlFor="exampleInputEmail1" className="form-label">Cellphone</label> */}
                <span className="input-group-text" id="addon-wrapping">@Cellphone</span>
                <input name="cellphone" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={user.cellphone} />
              </div>
              <div className="mb-3">
                {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
                <span className="input-group-text" id="addon-wrapping">@Email address</span>
                <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={user.email} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>

              <div className="mb-3">
                {/* <label htmlFor="exampleInputPassword1" className="form-label">Enter Password</label> */}
                <span className="input-group-text" id="addon-wrapping">@Password</span>
                <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="****" />
              </div>
              <div className="mb-3">
                {/* <label htmlFor="exampleFormControlInput1" className="form-label">Confirm Password</label> */}
                <span className="input-group-text" id="addon-wrapping">@Confirm Password</span>
                <input name="passwordconfirm" type="password" className="form-control" id="exampleFormControlInput1" placeholder="****" />
              </div>
              <button type="submit" className="btn btn-primary">Save changes</button>
            </form>
          </div>

        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">"fav postures content here"...</div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
          <div>
            <h3> Create your sequence</h3>
            <h4>Some instructions here ...</h4>
          </div>
          ...

        </div>
        <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabIndex="0">...</div>
      </div>

      <h1>Привет из вьюшки UserAccount</h1>
      <div className="user-sequence">
        <div className="empty">
          <div className="fill" draggable="true"> </div>
        </div>

        {/* // eslint-disable-next-line react/self-closing-comp */}
        <div className="empty" />

        {/* // eslint-disable-next-line react/self-closing-comp */}
        <div className="empty" />

        {/* // eslint-disable-next-line react/self-closing-comp */}
        <div className="empty" />

        {/* // eslint-disable-next-line react/self-closing-comp */}
        <div className="empty" />

      </div>
      {/* <script src="/js/dragndrop.js" /> */}
    </Layout>
  );
};
