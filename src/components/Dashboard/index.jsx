import React from "react";
import { Row } from "react-bootstrap";
import Content from "../Content";
import Sidebar from "../Sidebar";

function Dashboard() {
  return (
    <Row className="d-flex ">
      <Sidebar />
      <Content />
    </Row>
  );
}

export default Dashboard;
