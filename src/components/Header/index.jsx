import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  const renderLink = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      return (
        <a href>
          <span>Đăng xuất</span>
        </a>
      );
    } else {
      return (
        <a href>
          <span>Đăng ký</span>
        </a>
      );
    }
  };
  return (
    <header class="header">
      <div class="container">
        <Col lg={12} className="col-logo">
          <Link to="/">
            <img
              src="https://vn.elsaspeak.com/wp-content/themes/theme-page-user-new/image/Logo.png"
              alt="Logo ELSA"
            />
          </Link>
          {renderLink()}
        </Col>
      </div>
    </header>
  );
}

export default Header;
