import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import Search from '../components/search_bar';
import Axios from "axios";

const InfoBar = (props) => {

  function testFunc() {
    console.log("clicked!!!!!!");
  }

  return (
    <div>
      <AppBar color="white" position="static">
        <Toolbar>
          <TypoGraphy variant="title">
            <p>Fashova</p>
          </TypoGraphy>
          <Tabs>
            <div style={{width : '70px', height: "60px", marginLeft : "250px", backgroundColor: "#000", color: "white", borderBottom :"5px solid black"}}>
              <p style={{paddingTop: "5px", paddingLeft: "4px"}}>Women</p>
            </div>
            <div style={{width : '70px', backgroundColor: "white", color: "#000", border: "1px solid grey"}}>
              <p style={{paddingTop: "5px", paddingLeft: "4px"}}>Curve</p>
            </div>
            <div style={{width : '70px', backgroundColor: "white", color: "#000", border: "1px solid grey"}}>
            <p style={{paddingTop: "5px", paddingLeft: "4px"}}>Men</p>
            </div>
          </Tabs>
          <div style={{marginLeft : "20px"}}><Search productInfo={props.productInfo} updateUuid = {props.updateUuid}/></div>
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