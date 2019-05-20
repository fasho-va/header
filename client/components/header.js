const React = require("react");
const InfoBar = require("./info_bar.js");
const ProductBar = require("./product_bar.js");

const Header = (props) => {
  return (
    <div>
      <InfoBar />
      <ProductBar />
    </div>
  );
}


module.exports = Header;