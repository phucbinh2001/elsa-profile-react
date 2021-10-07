import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logOut } from "../../Pages/Login/loginSlice";
import "./style.css";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.isLogin);

  const handleLogout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("USER_PROFILE");

    const action = logOut();
    dispatch(action);

    history.push("/login");
  };

  const renderLink = () => {
    if (isLogin) {
      return (
        <a className="log-in-link" href onClick={handleLogout}>
          <span>Đăng xuất</span>
        </a>
      );
    } else {
      return (
        <a className="log-in-link" href>
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
          <Button className="burger-menu">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </Button>
        </Col>
      </div>
    </header>
  );
}

export default Header;
