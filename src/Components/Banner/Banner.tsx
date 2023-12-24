import "./Banner.css";
import Arrow from "../../assets/Arrow";
import { ReactElement } from "react";
function Banner(): ReactElement {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow>
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcycles</span>
            <span>Mobile Phones</span>
            <span>For Sale:Houses & Apartments</span>
            <span>Scooters</span>
            <span>Commercial & Other Vehicles</span>
          </div>
        </div>
        <div className="banner">
          <img src="../../../assets/images/bannercopy.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
