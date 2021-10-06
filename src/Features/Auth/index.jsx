import React from "react";
import { Row } from "react-bootstrap";
import Content from "../../components/Content";
import Sidebar from "../../components/Sidebar";
import LoginPage from "../../Pages/Login";

function CheckLogin() {
  const token = localStorage.getItem("access-token");
  if (token === null) return LoginPage;
  else
    return (
      <Row className="d-flex ">
        <Sidebar />
        <Content />
      </Row>
    );
}

export default CheckLogin;
