import React from "react";
import "../styles/product_bar_styles.css";

import ProductMenu from "./product_menu";

const ProductBar = (props) => {

  const hoverHandler = event => {
    const e1 = event.target.style;
    e1.textDecoration = "underline";
  }

  const mouseLeaveHandler = event => {
    const e1 = event.target.style;
    e1.textDecoration = "none";
  }

  return (
    <div id = "productBarDiv" >
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Wear The Pants", "Tees, Tanks, and Shorts","New Dresses","New Matching Sets","New Swim","New Jeans","New BodySuits","New Graphic Tees",
                "New Bottoms","New Lingerie","New Shoes", "New Accessories"
                ]
                } 
              title="New Arrivals"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["S10 Dresses", "New Arrivals", "Little White Dress", "Little Black Dress", "Little Red Dress","Girls Night Out", "Prom", "Luxe",
                "Special Occasion", "Mini Dresses", "Midi Dresses", "Maxi Dresses", "Everyday Dresses", "Sale Dresses"
                ]
              } 
              title="Dresses"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Denim Shorts", "Skinny", "Boyfriend & Tomboy", "Flare & Bootcut", "High Rise", "Mid Rise", "Low Rise", "Distressed", "Color",
                "Stretchiest Jeans", "$29.99 and Under", "FN's Best Selling Jeans", "Find Your FN Fit", "Sale Jeans"
              ]
                } 
              title="Jeans"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Heels", "Sandals", "Sneakers","Boots & Booties","Flats","Glass Collection","Sale Shoes"]
                } 
              title="Shoes"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Two-Piece Swimsuits", "One-Piece Swimsuits", "Cover-Ups","Neon Brights","The Black Collection","Red, White, and Blue Swim",
                "Mix & Match Seperates", "Beach Accessories", "Curve + Swim", "Sale Swim"
              ]
                } 
              title="Swimsuits"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Tanks & Sleeveless", "Short Sleeve","Long Sleeve","Basic","Sale"]
                } 
              title="Bodysuits"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Tanks & Sleeveless", "Short Sleeve", "Long Sleeve", "Sale"]
                } 
              title="Shirts & Blouses"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Tanks & Sleeveless", "Short Sleeve", "Long Sleeve", "Graphics", "Crop Tops", "Off Shoulder", "Sale"]
                } 
              title="Fashion Tops"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Music Graphic Tees", "Oversized", "Short Sleeve", "Crop Tops", "BodySuits", "Long Sleeve", "Hoodies & Sweatshirts","Sale"]
                } 
              title="Graphic Tees"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Basic Bodysuits", "Tanks & Sleeveless", "Short Sleeve", "Long Sleeve", "Sale"]
                } 
              title="Basic Tops"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Biker Shorts", "Denim Shorts", "Tie Waist", "Bermuda", "Booty Shorts", "Distressed", "High Rise", "Mid Rise", "Low Rise", "Color Shop"]
                } 
              title="Shorts"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "$15 Pants", "Pants", "Skirts", "Denim Skirts", "Leggings", "Biker Shorts", "Denim Shorts", "Shorts",
                "$5.99 Leggings and Up", "Sale Shorts", "Sale Bottoms"  
              ]
                } 
              title="Bottoms"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Short Sets", "Skirt Sets", "Pant Sets", "Wear To Work", "Sale Matching Sets"]
                } 
              title="Matching Sets"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Rompers", "Jumpsuits", "Sale Rompers and Jumpsuits"]
                } 
              title="Rompers and Jumpsuits"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Prom Dresses", "Prom Shoes", "Prom Accessories", "Lingerie Essentials", "Prom Curve & Plus"]
                } 
              title="Prom"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Curve + Plus"]
                } 
              title="Luxe"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Sexy Lingerie", "Bridal & Honeymoon", "Teddies + Babydolls", "Lingerie Sets", "Stockings", "Lingerie Essentials",
                "Bras + Bralettes", "Panties", "Sleepwear + Robes", "Shapewear", "Sale Lingerie"
              ]
                } 
              title="Lingerie"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Make A Move", "Active Tops", "Active Bottoms", "Active Sets", "Graphic Tees", "Sale Activewear"]
                } 
              title="Activewear"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Blazers", "Denim", "Kimonos", "Faux Fur", "Faux Leather + Suede", "Lightweight", "Outerwear", "Sale Jackets"]
                } 
              title="Jackets"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Cardigans & Sweater Coats", "Pullovers"]
                } 
              title="Sweaters"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Handbags", "Sunglasses", "Belts", "Hats & Scarves", "Legwear", "Hair Accessories", "Beauty", "Jewelry","Earrings", "Necklaces",
                "Bracelets", "Body Jewelry", "Rings", "Sale Accessories"]
                } 
              title="Accessories"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Matching Sets", "Dresses", "Tops", "Jackets", "Bottoms", "Plus"]
                } 
              title="Wear To Work"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Back In Stock", "Best Sellers", "Coming Soon", "Cardi B SS 19", "Cardi Holiday 18", "Kylie", "Neon Collection", "The Vacation Shop"]
                } 
              title="Collections"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["New Arrivals", "Plus Sale", "Dresses", "Black Dresses", "Jeans", "Leggings", "Bottoms", "Jackets", "Sweaters"]
                } 
              title="Plus Size & Curve"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["$10 Dreses", "$15 Pants", "Sale Dresses", "Sale Matching Sets", "Sale Shoes", "Sale Jeans", "Sale Tops", "Sale Shorts"]
                } 
              title="Sale"
              />
          </div>
          <div onMouseOver = {hoverHandler} onMouseOut = {mouseLeaveHandler} style = {{margin: "10px", color: "white"}}>
            <ProductMenu 
              choices = {
                ["Blowout", "$5 and Under", "$10 and Under", "$15 and Under", "$20 and Under"]
                } 
              title="Last Chance"
              />
          </div>
    </div>
  )
}

export default ProductBar;