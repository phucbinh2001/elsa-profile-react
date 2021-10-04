import { Container, Row } from "react-bootstrap";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div class="App">
      <Header />
      <section className="main">
        <Container>
          <Row className="d-flex ">
            <Sidebar />
            <Content />
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
