import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Autocomplete from 'react-autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardTravelIcon from '@material-ui/icons/CardTravel';

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
          <Autocomplete
            getItemValue={(item) => item.label}
            items={[
              { label: 'apple' },
              { label: 'banana' },
              { label: 'pear' }
            ]}
            renderItem={(item, isHighlighted) =>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
              </div>
            }
            onChange={(e) => value = e.target.value}
            onSelect={(val) => value = val}
          />
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