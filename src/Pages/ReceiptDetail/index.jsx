import React from "react";
import "./style.css";

function ReceiptDetailPage() {
  return (
    <div className="Page_root receipt-detail">
      <div>
        <h1 className="Page_title">
          Chi tiết hóa đơn <span className="code">ELSA1298762999-01</span>
        </h1>
      </div>
      <article className="Section_root">
        <section className="Section_children">
          <table className="Table_Element">
            <colgroup>
              <col className="sc-ezrdKe bAYFRD" />
              <col className="sc-ezrdKe bAYFRD" />
            </colgroup>
            <tbody>
              <tr className="TableRow">
                <td className="TableRow_1">Ngày</td>
                <td className="TableRow_2">01 tháng 3, 2021</td>
              </tr>
              <tr className="TableRow">
                <td className="TableRow_1">Mã số hóa đơn</td>
                <td className="TableRow_2">ELSA1298762999</td>
              </tr>
              <tr className="TableRow">
                <td className="TableRow_1">Phương thức thanh toán</td>
                <td className="TableRow_2">Momo (0900 000 000)</td>
              </tr>
              <tr className="TableRow">
                <td className="TableRow_1">Nhà cung cấp</td>
                <td className="TableRow_2">ELSA Speak Việt Nam</td>
              </tr>
              <tr className="TableRow">
                <td className="TableRow_1">Địa chỉ</td>
                <td className="TableRow_2">
                  29/11 Bùi Thị Xuân, phường 2, quận Tân Bình, thành phố Hồ Chí
                  Minh, Việt Nam
                </td>
              </tr>
              <tr className="TableRow">
                <td className="TableRow_1">Mã số VAT</td>
                <td className="TableRow_2">SE556703748501</td>
              </tr>
              <tr className="TableRow">
                <td className="TableRow_1">Sản phẩm</td>
                <td className="TableRow_2">Gói ELSA Pro 1 tháng</td>
              </tr>
              <tr className="TableRow">
                <td className="TableRow_1">Thuế</td>
                <td className="TableRow_2">0Đ</td>
              </tr>
              <tr className="TableRow">
                <td className="TableRow_1">Tổng cộng</td>
                <td className="TableRow_2">99.000Đ</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </div>
  );
}

export default ReceiptDetailPage;
