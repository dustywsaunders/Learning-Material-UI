import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Header (props) {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" color="inherit">
          Exercise Database
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
