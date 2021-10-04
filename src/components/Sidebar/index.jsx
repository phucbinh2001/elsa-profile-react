import React from "react";
import "./style.css";

function Sidebar() {
  return (
    <div className="navigation sidebar fl_left">
      <div className="menu_root">
        <div className="menu_avatar">
          <img
            src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/image/avatar.png.webp"
            alt=""
          />
        </div>
        <div>
          <ul className="menu_list" load="toggleMenu()">
            <li>
              <a onclick="show_sub_menu()">
                <span className="color"></span>
                <span className="icon">
                  <img src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/icon_sidebar/icon_1.png.webp" />
                </span>
                <span className="title">Tài khoản</span>
                <span className="fa fa1 fa-chevron-down"></span>
              </a>
              <ul id="show_sub_menu" className="sub_menu">
                <li>
                  <a
                    id="info_acount_btn"
                    href="https://vn.elsaspeak.com/profile/"
                  >
                    <span className="sub_color"></span>
                    <span className="title_menu">Thông tin tài khoản</span>
                  </a>
                </li>
                <li>
                  <a
                    id="info_acount_btn"
                    href="https://vn.elsaspeak.com/change-password/"
                  >
                    <span className="sub_color"></span>
                    <span className="title_menu">Thay Đổi Mật Khẩu</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a id="core_elsa_btn" href="https://vn.elsaspeak.com/score/">
                <span className="color"></span>
                <span className="icon">
                  <img src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/icon_sidebar/icon_4.png.webp" />
                </span>
                <span className="title">Điểm ELSA</span>
              </a>
            </li>
            <li>
              <a
                id="purchased_course_btn"
                href="https://vn.elsaspeak.com/new-package/"
              >
                <span className="color"></span>
                <span className="icon">
                  <img src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/icon_sidebar/icon_3.png.webp" />
                </span>
                <span className="title">Gói Học</span>
              </a>
            </li>
            <li>
              <a id="bill_btn" href="https://vn.elsaspeak.com/receipt/">
                <span className="color"></span>
                <span className="icon">
                  <img src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/icon_sidebar/icon_5.png.webp" />
                </span>
                <span className="title">Hóa đơn</span>
              </a>
            </li>
            <li>
              <a id="redem_btn" href="https://vn.elsaspeak.com/redeem/">
                <span className="color"></span>
                <span className="icon">
                  <img src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/icon_sidebar/icon_6.png.webp" />
                </span>
                <span className="title">Redeem code</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
