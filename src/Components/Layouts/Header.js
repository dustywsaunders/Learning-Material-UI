import React from 'react';
import {
  AppBar, 
  Toolbar, 
  Typography,
  withStyles
} from '@material-ui/core';
import CreateDialog from '../Exercises/Dialog'

const styles = {
  flex: {
    flex: 1
  }
}

export default withStyles(styles)(({ muscles, classes, onExerciseCreate }) =>
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          color="inherit"
          className={classes.flex}
          >
          Exercise Database
        </Typography>
        <CreateDialog
          muscles={muscles}
          onCreate={onExerciseCreate}
        />
      </Toolbar>
    </AppBar>
)

