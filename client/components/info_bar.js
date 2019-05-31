import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import Search from '../components/search_bar';
import "../styles/info_bar_styles.css";

const InfoBar = (props) => {

  const hoverHandler = event => {
    const e1 = event.target.style;
    e1.textDecoration = "underline";
  }

  const mouseLeaveHandler = event => {
    const e1 = event.target.style;
    e1.textDecoration = "none";
  }

  const iconMouseOver = event => {
    const e1 = event.target.style;
    e1.transform = "scale(1.15)";
  }

  const iconMouseLeave = event => {
    const e1 = event.target.style;
    e1.transform = "scale(1.0)";
  }



  return (
    <div>
      <img className = "logo" id ="hiddenLogo" src ={require("../logo.png")}/>  
      <AppBar color="white" position="static">
        <Toolbar>
          <img className = "logo" src ={require("../logo.png")}/>  
          <Tabs style = {{fontFamily : "Roboto"}}>
            <div id = "womensTab">
              <p onMouseOver = {hoverHandler} onMouseLeave = {mouseLeaveHandler} style={{paddingTop: "5px", paddingLeft: "10px", cursor: "pointer"}}>
                Women
              </p>
            </div>
            <div className = "othersTab">
              <p onMouseOver = {hoverHandler} onMouseLeave = {mouseLeaveHandler} style={{paddingTop: "5px", paddingLeft: "15px", cursor: "pointer"}}>
                Curve
              </p>
            </div>
            <div className = "othersTab">
              <p onMouseOver = {hoverHandler} onMouseLeave = {mouseLeaveHandler} style={{paddingTop: "5px", paddingLeft: "20px", cursor: "pointer"}}>
                Men
              </p>
            </div>
          </Tabs>
          <div id = "searchDiv">
            <Search productInfo={props.productInfo} updateUuid = {props.updateUuid}/>
          </div>
          <div id = "searchIconDiv">
            <SearchIcon style ={{color: "white", marginLeft: "35px"}}/>
          </div>
          <div id = "personIconDiv">
            <PersonIcon style ={{cursor: "pointer"}} onMouseOver = {iconMouseOver} onMouseLeave = {iconMouseLeave} />
          </div>
          <div id = "favoriteIconDiv">
            <FavoriteIcon  style ={{cursor: "pointer"}} onMouseOver = {iconMouseOver} onMouseLeave = {iconMouseLeave}/>
          </div>
          <div id ="cardTravelIconDiv">
            <CardTravelIcon  style ={{cursor: "pointer"}} onMouseOver = {iconMouseOver} onMouseLeave = {iconMouseLeave}/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default InfoBar;