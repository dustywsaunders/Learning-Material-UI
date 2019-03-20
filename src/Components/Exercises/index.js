import React from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';


const styles = {
  Paper: { 
    padding: 20,
    marginTop: 8,
    marginBottom: 8
  }
}

export default props => 
  <Grid container spacing={8}>
    <Grid item sm>
      <LeftPane styles={styles}/>
    </Grid>
    <Grid item sm>
      <RightPane styles={styles}/>
    </Grid>
  </Grid>

