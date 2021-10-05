import React from "react";
import InfoUser from "../../components/InfoUser";
import PackageCard from "../Package/Components/PackageCard";

function ProfilePage() {
  const UserData = {
    name: "Khai.nguyen",
    email: "17520605@gm.uit.edu.vn",
    birthday: "May 15, 1999",
    country: "Vietnam",
  };

  return (
    <div className="Page_root">
      <div>
        <h1 className="Page_title">Tổng quan về tài khoản</h1>
      </div>
      <article className="Section_root1 sesion_desktop">
        <h3>Gói học của bạn</h3>
        <PackageCard name="ELSA Free" desc="Chỉ sử dụng một số tính năng." />
      </article>
      <InfoUser data={UserData} />
    </div>
  );
}

export default ProfilePage;
