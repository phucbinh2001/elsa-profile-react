import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ReceiptPage() {
  return (
    <div className="Page_root">
      <div>
        <h1 className="Page_title">Hóa đơn</h1>
      </div>
      <article className="Section_root">
        <section className="Section_children_hd">
          <table className="content-table">
            <thead>
              <tr>
                <th>Ngày</th>
                <th>Mã số hóa đơn</th>
                <th>Giá tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/01/2021</td>

                <td>ELSA1298762999-01</td>

                <td>99.000Đ</td>

                <td>
                  <Link to="/receipt-detail" className="detail_bill_a">
                    Chi tiết
                  </Link>
                </td>
              </tr>
              <tr>
                <td>01/01/2021</td>

                <td>ELSA1298762999-01</td>

                <td>99.000Đ</td>

                <td>
                  <Link to="/receipt-detail" className="detail_bill_a">
                    Chi tiết
                  </Link>
                </td>
              </tr>
              <tr>
                <td>01/01/2021</td>

                <td>ELSA1298762999-01</td>

                <td>99.000Đ</td>

                <td>
                  <Link to="/receipt-detail" className="detail_bill_a">
                    Chi tiết
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </div>
  );
}

export default ReceiptPage;
