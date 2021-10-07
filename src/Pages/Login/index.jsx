import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import userApi from "../../api/userApi";
import { logIn } from "./loginSlice";
import "./style.css";

function LoginPage() {
  const res = {
    message: "Login accepted.",
    profile: {
      phone: "",
      username: "Hung",
      external_id: "NAQlDDA0XkkOXjBCHlUjPB8jADgCBgIkCBBOECUZMXw=",
      native_language: "",
      last_activity: "20211006150257",
      native_score: 78.67,
      ons: 78.67,
      eps: 78.24,
      scoring_version: 1,
      registration_date: "20200730",
      native_strictness: false,
      finish_onboard: true,
      is_bootstrap: true,
      firebase_id: ["ej4eAGo5ukUcioehfWS6y5", 20210327133023],
      mini_program: false,
      difficulty: null,
      daily_reminder: null,
      display_language: null,
      sound_effect_volume: null,
      learning_commitment: null,
      accept_notifications: false,
      free_trial: "",
      location: "VN",
      organizations: ["ELSA_B2B_ORG"],
      firebase_user_id: "NAQlDDA0XkkOXjBCHlUjPB8jADgCBgIkCBBOECUZMXw=",
    },
    session:
      "F3S0w0bysBQFdbjtxpFurqBLbjHw7k8Yqj/yIjtB7SDIcRFWsrGL1YJY+V2R3n/qlOSN4svLOXxBTldqHETzh67s8TCXui36zVzh7ldmnflyRIL6BKxcziNr6pfNNhV01AxhZxteFv9XvI+f7rqNRuBYY2ywWlaGIt9E37y7PQ6ULJ6fPB/r4ozanh5NOoQonsGQrwmkGP4DHVziakWUJg==",
    refresh_token: "12291121",
  };

  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // const [IsLogin, setIsLogin] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const data = {
    // email: "quochung.030997@gmail.com",
    // password: "tra215413199",
    email: Email, // can be either username or email
    password: Password,
  };
  const handleSubmit = async () => {
    const user = await userApi.login(data);

    localStorage.setItem("ACCESS_TOKEN", user.session);
    localStorage.setItem("USER_PROFILE", JSON.stringify(user.profile));

    // localStorage.setItem("ACCESS_TOKEN", user.jwt);
    // localStorage.setItem("USER_PROFILE", JSON.stringify(user.user));

    const action = logIn();
    dispatch(action);
  };

  return (
    <div className="form-container">
      {isLogin ? <Redirect to="/" /> : ""}
      <h1 className="signin-label">Chào mừng bạn quay lại!</h1>
      <h1 className="signin-label">Đăng ký tài khoản ELSA thật đơn giản.</h1>
      <input
        value={Email}
        onChange={handleEmailChange}
        placeholder="Email"
        id="email"
        type="email"
        className="email-input ant-input"
        name="email"
      />
      <input
        value={Password}
        onChange={handlePassChange}
        placeholder="Password"
        id="password"
        type="password"
        formcontrolname="password"
        className="password-input ant-input"
        name="password"
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="signin-button ant-btn ant-btn-primary ant-btn-round"
      >
        <span> Tiếp tục </span>
      </button>
    </div>
  );
}

export default LoginPage;
