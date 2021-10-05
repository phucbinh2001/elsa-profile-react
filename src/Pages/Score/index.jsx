import React from "react";

function ScorePage() {
  return (
    <div class="Page_root">
      <div>
        <h1 class="Page_title">Điểm ELSA của bạn</h1>
      </div>
      <article class="Section_root1">
        <h3>Tiến độ</h3>
        <div class="core_lt">
          <img
            src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/img_core/core (1).png.webp"
            alt=""
          />
        </div>
      </article>
      <article class="Section_root1">
        <h3>Thành tích</h3>
        <div class="core_lt">
          <img
            src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/img_core/core (2).png.webp"
            alt=""
          />
        </div>
      </article>
      <article class="Section_root1">
        <div class="core_lt">
          <img
            class="img_core"
            src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/img_core/core (3).png.webp"
            alt=""
          />
          <img
            class="img_core last"
            // style="margin-left: 5%;"
            src="https://vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/img_core/core (4).png.webp"
            alt=""
          />
        </div>
      </article>
    </div>
  );
}

export default ScorePage;
