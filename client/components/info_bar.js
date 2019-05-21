import React from "react";
import AppBar from '@material-ui/core/AppBar';
const InfoBar = (props) => {
  return (
    <div>
      <AppBar color="primary" position="static">
        <h1>My header</h1>
      </AppBar>
    </div>
  )
}

export default InfoBar;