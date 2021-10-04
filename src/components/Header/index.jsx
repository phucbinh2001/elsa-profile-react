import React from "react";
import { Col } from "react-bootstrap";
import "./style.css";

function Header() {
  return (
    <header class="header">
      <div class="container">
        <Col lg={12} className="col-logo">
          <a alt="">
            <img
              src="https://vn.elsaspeak.com/wp-content/themes/theme-page-user-new/image/Logo.png"
              alt="Logo ELSA"
            />
          </a>
          <a alt="">
            <span>Đăng xuất</span>
          </a>
          <a alt="">
            <span>Đăng ký</span>
          </a>
        </Col>
      </div>
    </header>
  );
}

export default Header;
