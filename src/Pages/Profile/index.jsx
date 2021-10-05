import React from "react";
import PackageCard from "../Package/Components/PackageCard";

function ProfilePage() {
  return (
    <div className="Page_root">
      <div>
        <h1 className="Page_title">Tổng quan về tài khoản</h1>
      </div>
      <article className="Section_root1 sesion_desktop">
        <h3>Gói học của bạn</h3>
        <PackageCard name="ELSA Free" desc="Chỉ sử dụng một số tính năng." />
      </article>
      <article className="Section_root">
        <div className="Section_title">
          <h3>
            Thông tin tài khoản{" "}
            <a
              className="edit_account_btn"
              href="https://vn.elsaspeak.com/change-profile/"
            >
              <i className="fa fa-pencil-square" aria-hidden="true"></i>
            </a>
          </h3>
        </div>
        <section className="Section_children">
          <table className="Table_Element">
            <colgroup>
              <col className="" />
              <col className="" />
            </colgroup>
            <tbody>
              <tr className="TableRow">
                <td className="TableRow_1">Username</td>
                <td className="TableRow_2">Khai.nguyen</td>
              </tr>
              <tr className="TableRow">
                <td className="TableRow_1">Email</td>
                <td className="TableRow_2">17520605@gm.uit.edu.vn</td>
              </tr>
              <tr className="TableRow">
                <td className="TableRow_1">Date of birth</td>
                <td className="TableRow_2">May 15, 1999</td>
              </tr>
              <tr className="TableRow">
                <td className="TableRow_1">Country or region</td>
                <td className="TableRow_2">Vietnam</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </div>
  );
}

export default ProfilePage;
