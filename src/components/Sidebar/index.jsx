import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setStatus } from "../Header/headerSlice";
import "./style.css";

function Sidebar() {
  const [active, setActive] = useState(false);
  const isMenuOpen = useSelector((state) => state.isOpenMenu);
  const dispatch = useDispatch();

  const handleClick = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    const action = setStatus(true);
    dispatch(action);
  };

  return (
    <div
      className={
        isMenuOpen
          ? "active navigation sidebar fl_left"
          : "navigation sidebar fl_left"
      }
    >
      <div className="menu_root">
        <div className="menu_avatar">
          <img
            src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/image/avatar.png.webp"
            alt=""
          />
        </div>
        <div onClick={closeMenu}>
          <ul className="menu_list">
            <li onClick={handleClick} className={active ? "active" : ""}>
              <a>
                <span className="color"></span>
                <span className="icon">
                  <img src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/icon_sidebar/icon_1.png.webp" />
                </span>
                <span className="title">Tài khoản</span>
                <span className="fa fa1 fa-chevron-down"></span>
              </a>
              <ul id="show_sub_menu" className="sub_menu">
                <li>
                  <NavLink id="info_acount_btn" to="/profile">
                    <span className="sub_color"></span>
                    <span className="title_menu">Thông tin tài khoản</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/change-password"
                    id="info_acount_btn"
                    href="https://vn.elsaspeak.com/change-password/"
                  >
                    <span className="sub_color"></span>
                    <span className="title_menu">Thay Đổi Mật Khẩu</span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink id="info_acount_btn" to="/score">
                <span className="color"></span>
                <span className="icon">
                  <img src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/icon_sidebar/icon_4.png.webp" />
                </span>
                <span className="title">Điểm ELSA</span>
              </NavLink>
            </li>
            <li>
              <NavLink id="purchased_course_btn" to="/package">
                <span className="color"></span>
                <span className="icon">
                  <img src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/icon_sidebar/icon_3.png.webp" />
                </span>
                <span className="title">Gói Học</span>
              </NavLink>
            </li>
            <li>
              <NavLink id="bill_btn" to="/receipt">
                <span className="color"></span>
                <span className="icon">
                  <img src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/icon_sidebar/icon_5.png.webp" />
                </span>
                <span className="title">Hóa đơn</span>
              </NavLink>
            </li>
            <li>
              <NavLink id="redem_btn" to="/redeem">
                <span className="color"></span>
                <span className="icon">
                  <img src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/icon_sidebar/icon_6.png.webp" />
                </span>
                <span className="title">Redeem code</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
