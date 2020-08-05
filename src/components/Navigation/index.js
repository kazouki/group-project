import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { logOut } from "../../store/user/actions";
import "./navigation.scss";

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
              <a className="navigation__link" href="/">
                Home
              </a>
            </li>
            {token ? (
              <li className="navigation__item">
                <a className="navigation__link" href="/inputform">
                  Add snippet
                </a>
              </li>
            ) : null}

            {!token ? (
              <li className="navigation__item">
                <a className="navigation__link" href="/signup">
                  Sign up
                </a>
              </li>
            ) : null}
            {!token ? (
              <li className="navigation__item">
                <a className="navigation__link" href="/login">
                  Login
                </a>
              </li>
            ) : (
              <div>
                <button
                  className="button-logout"
                  onClick={() => dispatch(logOut())}
                >
                  Log out
                </button>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}
