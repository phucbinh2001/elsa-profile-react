import React from "react";
import { Link } from "react-router-dom";

function InfoUser(props) {
  const { name, email, birthday, country } = props.data;
  console.log(props.data);

  return (
    <article className="Section_root">
      <div className="Section_title">
        <h3>
          Thông tin tài khoản{" "}
          <Link to="/change-profile" className="edit_account_btn">
            <i className="fa fa-pencil-square" aria-hidden="true"></i>
          </Link>
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
              <td className="TableRow_2">{name}</td>
            </tr>
            <tr className="TableRow">
              <td className="TableRow_1">Email</td>
              <td className="TableRow_2">{email}</td>
            </tr>
            <tr className="TableRow">
              <td className="TableRow_1">Date of birth</td>
              <td className="TableRow_2">{birthday}</td>
            </tr>
            <tr className="TableRow">
              <td className="TableRow_1">Country or region</td>
              <td className="TableRow_2">{country}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}

export default InfoUser;
