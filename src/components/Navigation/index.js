import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import { logOut } from "../../store/user/actions";
import "./navigation.css";

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
              <a href="/">Home</a>
            </li>

            {!token ? (
              <li>
                <a href="/signup">Sign up</a>
              </li>
            ) : null}
            

            {token ? (
              <li>
                <a href="/inputform">Add a Snippet</a>
              </li>
            ) : null}

            {!token ? (
              <li>
                <a href="/login">Log in</a>
              </li>
            ) : (
              <div>
                <li>
                  <a href="/">{user.email}</a>
                </li>
                <a href="/">
                  <button
                    className="button-logout"
                    onClick={() => dispatch(logOut())}
                  >
                    Log out
                  </button>
                </a>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
