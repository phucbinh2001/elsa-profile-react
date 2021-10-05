import React from "react";
import ProfilePage from "../Profile";
import PackageCard from "./Components/PackageCard";

function PackagePage() {
  const bannerLink =
    "vn.elsaspeak.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/theme-page-user-new/image/BackgroudFull.png.webp";

  return (
    <>
      <ProfilePage />
      <div className="Page_root">
        <PackageCard
          //   name="ELSA Pro 6 Tháng"
          //   desc="ELSA Pro có thời hạn đến 03 tháng 06,2021."
          banner={bannerLink}
          price="999000"
        />
      </div>
    </>
  );
}

export default PackagePage;
