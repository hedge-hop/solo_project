const React = require('react');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/publicStyles.css" />

        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" />
        {/* <script defer src="/js/publicScript.js" /> */}
        <title>Asana</title>
      </head>
      <body>
        {/* <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand mb-0 h1" href="/">
              <img src="img/sl_051022_50280_34.jpg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" id="Logo" />
              YogaDev
            </a>
          </div>
        </nav> */}
        {user ? (
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand mb-0 h1" href="/">
                <img src="img/sl_051022_50280_34.jpg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" id="Logo" />
                YogaDev
              </a>
              {/* <a className="navbar-brand" href="#">Navbar</a> */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/userpage">
                      Hi there,
                      {' '}
                      {user.firstname}
                      {' '}
                      !
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout">Sign out</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Asanas
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        ) : (
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand mb-0 h1" href="/">
                <img src="img/sl_051022_50280_34.jpg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" id="Logo" />
                YogaDev
              </a>
              {/* <a className="navbar-brand" href="#">Navbar</a> */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">Sign in</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Asanas
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        )}

        <h1> Привет из Layout</h1>
        {children}
      </body>
    </html>
  );
};
