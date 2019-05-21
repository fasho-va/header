import React from "react";
import InfoBar from "./info_bar.js";
import ProductBar from "./product_bar.js";

const Header = (props) => {
  return (
    <div>
      <InfoBar />
      <ProductBar />
    </div>
  );
}


export default Header;