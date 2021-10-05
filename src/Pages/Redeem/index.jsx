import React from "react";
import "./style.css";

function RedeemPage() {
  return (
    <div className="Page_root">
      <div>
        <h1 className="Page_title">Đổi mã code</h1>
      </div>
      <div>
        <p className="p_text_code">
          <strong>Nhập mã code ở mặt sau của thẻ quà tặng của bạn,</strong>
          <br />
          <strong>hoặc nhập mã code từ tin nhắn mua hàng của bạn.</strong>
        </p>
      </div>
      <div className="form_edit form_code">
        <div className="form_group">
          <span className="Title Title_code">Nhập mã code của bạn</span>
          <div className="Input_name Input_code">
            <input
              id="code_redem"
              type="text"
              name="code_redem"
              placeholder="Nhập mã code của bạn"
              required=""
            />
          </div>
        </div>
        <div className="form_group btn_group btn_code">
          <div className="Input_code_btn">
            <button className="btn_submit_code">Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedeemPage;
