import React from "react";
import "./style.css";

function ChangeProfilePage() {
  return (
    <div className="Page_root">
      <div>
        <h1 className="Page_title">Chỉnh sửa hồ sơ</h1>
      </div>
      <div className="form_edit">
        <div className="form_group">
          <span className="Title chil">Tên người dùng</span>
          <div className="Input_name chil">
            <input
              id="fullname"
              type="text"
              name="fullname"
              placeholder="Họ Và Tên"
              className=""
            />
          </div>
        </div>
        <div className="form_group">
          <span className="Title chil">Email</span>
          <div className="Input_name chil">
            <input id="email" type="email" name="email" placeholder="Email" />
          </div>
        </div>
        <div className="form_group">
          <span className="Title chil">Ngày Sinh</span>
          <div className="Input_name chil">
            <div className="Input_day">
              <input
                className="BirthDay"
                name="BirthDay"
                type="text"
                placeholder="01"
              />
            </div>
            <div className="Input_day ipd">
              <label className="box">
                <select className="BirthDayMonth">
                  <option>Tháng 1</option>
                  <option>Tháng 2</option>
                  <option>Tháng 3</option>
                  <option>Tháng 4</option>
                  <option>Tháng 5</option>
                  <option>Tháng 6</option>
                  <option>Tháng 7</option>
                  <option>Tháng 8</option>
                  <option>Tháng 9</option>
                  <option>Tháng 10</option>
                  <option>Tháng 11</option>
                  <option>Tháng 12</option>
                </select>
              </label>
            </div>
            <div className="Input_day ipd">
              <input
                id="BirthDayYear"
                className="BirthDayYear"
                type="text"
                placeholder="1997"
              />
            </div>
          </div>
        </div>
        <div className="form_group">
          <span className="Title chil">Địa chỉ</span>
          <div className="Input_name chil">
            <input type="text" />
          </div>
        </div>
        <div className="form_group btn_group">
          <span className="Title chil"></span>
          <div className="Input_name chil">
            <button className="btn_cancle" type="submit">
              Hủy
            </button>
            <button className="btn_submit" type="submit">
              Lưu Hồ Sơ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeProfilePage;
