import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import LoginPage from "./Pages/Login";

function App() {
  const AccessToken = localStorage.getItem("ACCESS_TOKEN");

  return (
    <div class="App">
      <Header />
      <section className="main">
        <Container>
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route path="/">
              {AccessToken != null ? <Dashboard /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </Container>
      </section>
    </div>
  );
}

export default App;
