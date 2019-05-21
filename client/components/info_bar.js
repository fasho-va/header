import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
const InfoBar = (props) => {
  return (
    <div>
      <AppBar color="white" position="static">
        <Toolbar>
          <TypoGraphy variant="h1">
            Fashova
          </TypoGraphy>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default InfoBar;