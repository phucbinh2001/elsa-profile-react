import React from "react";
import "./style.css";

function LoginPage() {
  return (
    <div className="form-container">
      <h1 className="signin-label">Chào mừng bạn quay lại!</h1>
      <h1 className="signin-label">Đăng ký tài khoản ELSA thật đơn giản.</h1>
      <input
        nz-input=""
        placeholder="Email"
        id="email"
        type="email"
        formcontrolname="email"
        className="email-input ant-input"
      />
      <input
        nz-input=""
        placeholder="Password"
        id="password"
        type="password"
        formcontrolname="password"
        className="password-input ant-input"
      />
      <button
        nz-button=""
        nztype="primary"
        nzshape="round"
        type="submit"
        className="signin-button ant-btn ant-btn-primary ant-btn-round"
      >
        <span> Tiếp tục </span>
      </button>
    </div>
  );
}

export default LoginPage;
