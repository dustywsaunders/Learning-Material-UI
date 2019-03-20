import React, { Fragment } from 'react';
import { 
  Grid, 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemText
} from '@material-ui/core';

const styles = {
  Paper: { 
    padding: 20,
    marginTop: 8,
    marginBottom: 8,
    height: 400,
    overflowY: 'auto'
  }
}

export default ({ exercises }) => 
  <Grid container spacing={8}>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          <Fragment key={group}>
            <Typography 
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              {group}
              <List component="ul">
                {exercises.map(({ title }) =>
                  <ListItem button key={title}>
                    <ListItemText primary={title} />
                  </ListItem>
                )}
              </List>
            </Typography>
          </Fragment>
        )}  
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography
          variant="display1"
        >
          Welcome!
        </Typography>
        <Typography
          variant="subheading"
        >
          Please select an exercise from the list.
        </Typography>
      </Paper>
    </Grid>
  </Grid>

