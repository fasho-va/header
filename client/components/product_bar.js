import React from "react";
import AppBar from '@material-ui/core/AppBar';
import App from "../app";
import Toolbar from '@material-ui/core/Toolbar';

import ProductMenu from "./product_menu";

const ProductBar = (props) => {
  return (
    <div style ={{display: "flex", flexWrap : "wrap", justifyContent: "center", backgroundColor : "orange"}}>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Wear The Pants", "Tees, Tanks, and Shorts","New Dresses","New Matching Sets","New Swim","New Jeans","New BodySuits","New Graphic Tees",
                "New Bottoms","New Lingerie","New Shoes", "New Accessories"
                ]
                } 
              title="New Arrivals"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["S10 Dresses", "New Arrivals", "Little White Dress", "Little Black Dress", "Little Red Dress","Girls Night Out", "Prom", "Luxe",
                "Special Occasion", "Mini Dresses", "Midi Dresses", "Maxi Dresses", "Everyday Dresses", "Sale Dresses"
            ]
                } 
              title="Dresses"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Denim Shorts", "Skinny", "Boyfriend & Tomboy", "Flare & Bootcut", "High Rise", "Mid Rise", "Low Rise", "Distressed", "Color",
                "Stretchiest Jeans", "$29.99 and Under", "FN's Best Selling Jeans", "Find Your FN Fit", "Sale Jeans"
              ]
                } 
              title="Jeans"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Heels", "Sandals", "Sneakers","Boots & Booties","Flats","Glass Collection","Sale Shoes"]
                } 
              title="Shoes"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Swimsuits"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Bodysuits"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Shirts & Blouses"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Fashion Tops"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Graphic Tees"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Basic Tops"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Shorts"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Bottoms"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Matching Sets"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Rompers and Jumpsuits"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Prom"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Luxe"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Lingerie"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Activewear"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Jackets"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Sweaters"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Accessories"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Wear To Work"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Collections"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Plus Size & Curve"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Sale"
              />
          </div>
          <div style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Dress1", "Dress 2"]
                } 
              title="Last Chance"
              />
          </div>
    </div>
  )
}

export default ProductBar;