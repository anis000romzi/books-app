import { Link } from 'react-router-dom';

function HeaderBar({ authedUser, logout }) {
  return (
    <nav className="navbar navbar-expand-sm bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          books-app
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"></ul>
          <div className="d-flex justify-content-center align-items-center">
            <span className="text-light m-2 fs-4">{authedUser.name}</span>
            <button
              className="btn btn-outline-light"
              type="button"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderBar;
