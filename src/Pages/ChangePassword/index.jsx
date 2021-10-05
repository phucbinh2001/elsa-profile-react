import React from "react";
import "./style.css";

function ChangePasswordPage() {
  return (
    <div className="Page_root">
      <div>
        <h1 className="Page_title">Đổi mật khẩu của bạn</h1>
      </div>
      <div className="form_edit">
        <div className="form_group">
          <span className="Title chil">Mật khẩu hiện tại</span>
          <div className="Input_name chil">
            <input
              type="password"
              placeholder="************"
              value=""
              required=""
              className=""
            />
          </div>
        </div>
        <div className="form_group">
          <span className="Title chil">Mật khẩu mới</span>
          <div className="Input_name chil">
            <input type="password" placeholder="************" value="" />
          </div>
        </div>
        <div className="form_group">
          <span className="Title chil">Nhập lại mật khẩu mới</span>
          <div className="Input_name chil">
            <input type="password" placeholder="************" value="" />
          </div>
        </div>
        <div className="form_group btn_group">
          <span className="Title chil"></span>
          <div className="Input_name chil">
            <button className="btn_cancle">Hủy</button>
            <button className="btn_submit">Lưu Mật Khẩu</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordPage;
