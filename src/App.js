import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import InputForm from "./components/InputForm";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

import { fetchSnippets } from "./store/snippet/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  // const onFetchData = () => {
  //   dispatch(fetchSnippets());
  // };

  // useEffect(() => {
  //   onFetchData();
  // });

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />

      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route path="/inputform" component={InputForm} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
