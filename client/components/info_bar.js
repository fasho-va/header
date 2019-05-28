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


const widthModifier = {
  width: `400px`,
};

const InfoBar = (props) => {
  return (
    <div>
      <AppBar color="white" position="static">
        <Toolbar>
          <TypoGraphy variant="title">
            Fashova
          </TypoGraphy>
          <Tabs>
            <Tab style={{width : '70px', minWidth: '70px', marginLeft : "250px", backgroundColor: "#000", color: "white", fontSize: ".75em", textAlign : "center", display : "inline-block"}} label="Women"/>
            <Tab style={{width : '70px', backgroundColor: "#000", color: "white", minWidth: '70px'}} label="Curve"/>
            <Tab style={{width : '70px', backgroundColor: "#000", color: "white", minWidth: '70px'}} label="Men"/>
          </Tabs>
          <div style={{marginLeft : "20px"}}><Search/></div>
          <div style={{width: "70px"}}><SearchIcon /></div>
          <div><PersonIcon /></div>
          <div style={{margin: "10px"}}><FavoriteIcon /></div>
          <div style={{marginLeft:"5px"}}><CardTravelIcon /></div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default InfoBar;