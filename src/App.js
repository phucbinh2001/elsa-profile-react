import { Container, Row } from "react-bootstrap";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LoginPage from "./Pages/Login";

function App() {
  return (
    <div class="App">
      <Header />
      <section className="main">
        <Container>
          {/* <Row className="d-flex ">
            <Sidebar />
            <Content />
          </Row> */}
          <LoginPage />
        </Container>
      </section>
    </div>
  );
}

export default App;
