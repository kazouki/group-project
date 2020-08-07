import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import { logOut } from "../../store/user/actions";
import "./navigation.css";

import { Link } from "react-router-dom";

export default function Navigation() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="navbar-homepage">
      <nav className="navbar">
        <div className="title">Project Title</div>

        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            {!token ? (
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            ) : null}

            {token ? (
              <li>
                <Link to="/inputform">Add Link Snippet</Link>
              </li>
            ) : null}

            {!token ? (
              <li>
                <Link to="/login">Log in</Link>
              </li>
            ) : (
              <div>
                <li>
                  <Link to="/">{user.email}</Link>
                </li>
                <Link to="/">
                  <button
                    className="button-logout"
                    onClick={() => dispatch(logOut())}
                  >
                    Log out
                  </button>
                </Link>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
