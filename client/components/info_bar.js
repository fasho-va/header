import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import Search from '../components/search_bar';

const InfoBar = (props) => {

  const hoverHandler = event => {
    const e1 = event.target.style;
    e1.textDecoration = "underline";
  }

  const mouseLeaveHandler = event => {
    const e1 = event.target.style;
    e1.textDecoration = "none";
  }

  return (
    <div>
      <AppBar color="white" position="static">
        <Toolbar>
          <img src ={require("../logo.png")} style ={{height : "50px", width : "250px", marginLeft: "50px"}}/>  
          {/* <TypoGraphy variant="title">  
            <p style={{fontSize: "2em", padding :"0px", margin: "0 0 0 50px", letterSpacing: ".2em"}}>Fashova</p>
          </TypoGraphy> */}
          <Tabs>
            <div style={{width : '70px', height: "60px", marginLeft : "15px", backgroundColor: "#000", color: "white", borderBottom :"5px solid black"}}>
              <p onMouseOver = {hoverHandler} onMouseLeave = {mouseLeaveHandler} style={{paddingTop: "5px", paddingLeft: "10px"}}>
                Women
              </p>
            </div>
            <div style={{width : '70px', backgroundColor: "white", color: "#000", border: "1px solid grey"}}>
              <p onMouseOver = {hoverHandler} onMouseLeave = {mouseLeaveHandler} style={{paddingTop: "5px", paddingLeft: "15px"}}>
                Curve
              </p>
            </div>
            <div style={{width : '70px', backgroundColor: "white", color: "#000", border: "1px solid grey"}}>
              <p onMouseOver = {hoverHandler} onMouseLeave = {mouseLeaveHandler} style={{paddingTop: "5px", paddingLeft: "20px"}}>
                Men
              </p>
            </div>
          </Tabs>
          <div style={{marginLeft : "20px"}}>
            <Search productInfo={props.productInfo} updateUuid = {props.updateUuid}/>
          </div>
          <div style={{width: "100px", backgroundColor: "black", marginRight: "20px"}}>
            <SearchIcon style ={{color: "white", marginLeft: "35px"}}/>
          </div>
          <div>
            <PersonIcon />
          </div>
          <div style={{margin: "10px"}}>
            <FavoriteIcon /></div>
          <div style={{marginLeft:"5px"}}>
            <CardTravelIcon />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default InfoBar;