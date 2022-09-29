const React = require('react');

module.exports = function Headers() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mr-4">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/auth/registration">
              Registration
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/auth/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/auth/logout">
              Logout
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              Post
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
