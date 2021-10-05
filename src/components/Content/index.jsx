import React from "react";
import { Route } from "react-router";
import ChangePasswordPage from "../../Pages/ChangePassword";
import ChangeProfilePage from "../../Pages/ChangeProfile";
import PackagePage from "../../Pages/Package";
import ProfilePage from "../../Pages/Profile";
import ReceiptPage from "../../Pages/Receipt";
import ReceiptDetailPage from "../../Pages/ReceiptDetail";
import RedeemPage from "../../Pages/Redeem";
import ScorePage from "../../Pages/Score";
import "./style.css";

function Content() {
  return (
    <div id="free_acount" class="content fl_left">
      <Route path="/" exact component={ProfilePage} />

      <Route path="/profile" component={ProfilePage} />
      <Route path="/change-password" component={ChangePasswordPage} />
      <Route path="/change-profile" component={ChangeProfilePage} />

      <Route path="/score" component={ScorePage} />
      <Route path="/package" component={PackagePage} />

      <Route path="/receipt" component={ReceiptPage} />
      <Route path="/receipt-detail" component={ReceiptDetailPage} />
      <Route path="/redeem" component={RedeemPage} />

      {/* <ProfilePage /> */}
    </div>
  );
}

export default Content;
