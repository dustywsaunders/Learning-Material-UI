import React from 'react';
import {
  AppBar, 
  Toolbar, 
  Typography
} from '@material-ui/core';
import CreateDialog from '../Exercises/Dialogs/Create'

function Header ({ muscles, onExerciseCreate }) {
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
        <CreateDialog
          muscles={muscles}
          onCreate={onExerciseCreate}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
