import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-danger-subtle">
          <div className="container-fluid">
            <h1 className="navbar-brand" href="#">
              Beautiful Library
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <h1 className="nav-link active" aria-current="page" href="#">
                    <Link to="/">Home</Link>
                  </h1>
                </li>
                <li className="nav-item">
                  <h1 className="nav-link active" aria-current="page" href="#">
                    <Link to="/books">Books</Link>
                  </h1>
                </li>
                <li className="nav-item">
                  <h1 className="nav-link active" aria-current="page" href="#">
                    <Link to="/adduser">Add Book</Link>
                  </h1>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;