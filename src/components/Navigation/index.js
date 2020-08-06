import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { logOut } from "../../store/user/actions";
import "./navigation.scss";
import { Link } from "react-router-dom";

export default function Navigation() {
  const token = useSelector(selectToken);
  // const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link className="navigation__link" to="/">
                Home
              </Link>
            </li>
            {token ? (
              <li className="navigation__item">
                <Link className="navigation__link" to="/inputform">
                  Add snippet
                </Link>
              </li>
            ) : null}

            {!token ? (
              <li className="navigation__item">
                <Link className="navigation__link" to="/signup">
                  Sign up
                </Link>
              </li>
            ) : null}
            {!token ? (
              <li className="navigation__item">
                <Link className="navigation__link" to="/login">
                  Login
                </Link>
              </li>
            ) : (
              <div>
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
        </nav>
      </div>
    </>
  );
}
