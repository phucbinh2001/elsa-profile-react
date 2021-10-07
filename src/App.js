import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import LoginPage from "./Pages/Login";

function App() {
  // const AccessToken = localStorage.getItem("ACCESS_TOKEN");

  const isLogin = useSelector((state) => state.isLogin);

  return (
    <div class="App">
      <Header />
      <section className="main">
        <Container>
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route path="/">
              {isLogin ? <Dashboard /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </Container>
      </section>
    </div>
  );
}

export default App;
