import React, { Fragment } from 'react';
import { 
  Grid, 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete' 

const styles = {
  Paper: { 
    padding: 20,
    marginTop: 8,
    marginBottom: 8,
    height: 400,
    overflowY: 'auto'
  }
}

export default ({ 
  exercises, 
  category, 
  onSelect,
  onDelete, 
  exercise: {
    id, 
    title = 'Welcome!', 
    description = 'Please select an exercise from the list.'
  }
}) => 
  <Grid container spacing={8}>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group
            ? <Fragment key={group}>
                <Typography 
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                  <List component="ul">
                    {exercises.map(({ id, title }) =>
                      <ListItem 
                        button 
                        key={title}
                        onClick={() => onSelect(id)}
                      >
                        <ListItemText 
                          primary={title} 
                        />
                        <ListItemSecondaryAction>
                          <IconButton
                            onClick={() => onDelete(id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )}
                  </List>
                </Typography>
              </Fragment>
            : null
        )}  
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        
        <Typography
          variant="display1"
        >
          { title }
        </Typography>
        <Typography
          variant="subheading"
        >
          { description }
        </Typography>
      </Paper>
    </Grid>
  </Grid>

