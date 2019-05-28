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


const InfoBar = (props) => {
  return (
    <div>
      <AppBar color="white" position="static">
        <Toolbar>
          <TypoGraphy variant="title">
            Fashova
          </TypoGraphy>
          <Tabs>
            <Tab label = "Women"/>
            <Tab label = "Curve"/>
            <Tab label = "Men"/>
          </Tabs>
          <Search />
          <SearchIcon />
          <PersonIcon />
          <FavoriteIcon />
          <CardTravelIcon />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default InfoBar;