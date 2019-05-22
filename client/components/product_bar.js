import React from "react";
import AppBar from '@material-ui/core/AppBar';
import App from "../app";
import Toolbar from '@material-ui/core/Toolbar';

const ProductBar = (props) => {
  return (
    <div style ={{display: "flex", flexWrap : "wrap", justifyContent: "center", backgroundColor : "black"}}>
          <div style = {{margin: "10px", color: "white"}}>New Arrivals</div>
          <div style = {{margin: "10px", color: "white"}}>Dresses</div>
          <div style = {{margin: "10px", color: "white"}}>Jeans</div>
          <div style = {{margin: "10px", color: "white"}}>Shoes</div>
          <div style = {{margin: "10px", color: "white"}}>BodySuits</div>
          <div style = {{margin: "10px", color: "white"}}>Shirts and Blouses</div>
          <div style = {{margin: "10px", color: "white"}}>Fashion Tops</div>
          <div style = {{margin: "10px", color: "white"}}>Graphic Tees</div>
          <div style = {{margin: "10px", color: "white"}}>Basic Tops</div>
          <div style = {{margin: "10px", color: "white"}}>Shorts</div>
          <div style = {{margin: "10px", color: "white"}}>Bottoms</div>
          <div style = {{margin: "10px", color: "white"}}>Prom</div>
          <div style = {{margin: "10px", color: "white"}}>Luxe</div>
          <div style = {{margin: "10px", color: "white"}}>Matching Sets</div>
          <div style = {{margin: "10px", color: "white"}}>Rompers and Jumpsuits</div>
          <div style = {{margin: "10px", color: "white"}}>Swimsuits</div>
          <div style = {{margin: "10px", color: "white"}}>Lingerie</div>
          <div style = {{margin: "10px", color: "white"}}>Activewear</div>
          <div style = {{margin: "10px", color: "white"}}>Jackets</div>
          <div style = {{margin: "10px", color: "white"}}>Sweaters</div>
          <div style = {{margin: "10px", color: "white"}}>Accessories</div>
          <div style = {{margin: "10px", color: "white"}}>Wear To Work</div>
          <div style = {{margin: "10px", color: "white"}}>Collections</div>
          <div style = {{margin: "10px", color: "white"}}>Plus Size & Curve</div>
          <div style = {{margin: "10px", color: "white"}}>Sale</div>
          <div style = {{margin: "10px", color: "white"}}>Last Chance</div>
    </div>
  )
}

export default ProductBar;