import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import { logOut } from "../../store/user/actions";
import "./navigation.scss";

export default function Navigation() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item">
              <a class="navigation__link" href="/">
                Home
              </a>
            </li>
            <li class="navigation__item">
              <a class="navigation__link" href="/inputform">
                Add snippet
              </a>
            </li>

            {!token ? (
              <li class="navigation__item">
                <a class="navigation__link" href="/signup">
                  Sign up
                </a>
              </li>
            ) : null}
            {!token ? (
              <li class="navigation__item">
                <a class="navigation__link" href="/login">
                  Login
                </a>
              </li>
            ) : (
              <div>
                <li class="navigation__item">
                  <a class="navigation__link" href="/user">
                    {user.firstName}
                  </a>
                </li>
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
