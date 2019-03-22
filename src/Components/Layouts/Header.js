import React from 'react';
import {
  AppBar, 
  Toolbar, 
  Typography
} from '@material-ui/core';
import CreateDialog from '../Exercises/Dialogs/Create'

function Header (props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          color="inherit"
          style={{
            flex: 1
          }}
          >
          Exercise Database
        </Typography>
        <CreateDialog/>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
