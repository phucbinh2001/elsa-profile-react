import React from "react";
import "./style.css";

function PackageCard(props) {
  const { name, price, desc, banner } = props;

  const renderPrice = () => {
    if (price) {
      return (
        <div class="div_elsafull">
          <span class="span1 price_full">Chỉ với:</span>
          <span class="span2 price_full">
            {new Intl.NumberFormat("vi-VN").format(price)} Đ
          </span>
        </div>
      );
    } else {
      return (
        <div className="text_elsapro update_pro">
          <h5>Nâng cấp lên ELSA Pro ngay</h5>
        </div>
      );
    }
  };

  const renderBanner = () => {
    if (banner) {
      return (
        <div class="Card_children_full">
          <img
            src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/image/BackgroudFull.png.webp"
            alt=""
          />
        </div>
      );
    } else {
      return (
        <div className="Card_children">
          <div className="Card_name">
            <span>{name}</span>
            <p>{desc}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="Section_children">
      <div className="Card_root">
        {renderBanner()}
        <div className="Card_body">
          <div className="ColumnLayout__root">
            <div className="ColumnLayout_0">
              {renderPrice()}
              <button className="btn_elsapro update_pro">Nâng Cấp Ngay</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackageCard;
