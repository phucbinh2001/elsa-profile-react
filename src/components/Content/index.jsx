import React from "react";
import { Route } from "react-router";
import PackagePage from "../../Pages/Package";
import ProfilePage from "../../Pages/Profile";
import ReceiptPage from "../../Pages/Receipt";
import RedeemPage from "../../Pages/Redeem";
import ScorePage from "../../Pages/Score";
import "./style.css";

function Content() {
  return (
    <div id="free_acount" class="content fl_left">
      <Route path="/" exact component={ProfilePage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/score" component={ScorePage} />
      <Route path="/package" component={PackagePage} />
      <Route path="/Receipt" component={ReceiptPage} />
      <Route path="/Redeem" component={RedeemPage} />
      {/* <ProfilePage /> */}
    </div>
  );
}

export default Content;
