import React from "react";
import { Link, useHistory, Redirect } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const currentUser = Meteor.userId();
  const onLogout = e => {
    e.preventDefault();
    history.push("/");
    Meteor.logout();
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        FakeBook
      </Link>

      <div className="row d-flex justify-content-end">
        <ul className="navbar-nav text-left">
          <li className="nav-item ">
            <Link className="nav-link" to="/Login">
              Login <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Register" className="nav-link">
              {currentUser}
            </Link>
          </li>
          {currentUser && (
            <li className="nav-item">
              <button className="nav-link btn btn-light" onClick={onLogout}>
                LogOut
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
