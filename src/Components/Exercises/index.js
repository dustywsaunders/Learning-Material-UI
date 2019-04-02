import React, { Fragment } from 'react';
import { 
  Grid, 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  withStyles
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete' 
import Edit from '@material-ui/icons/Edit' 
import Form from './Form'

const styles = theme => ({
  paper: { 
    padding: 20,
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: 8,
      height: 'calc(100% - 16px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    },
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100%-64px-48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100%-56px-48px)'
    }
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
  }
})

export default withStyles(styles) (({ 
  classes,
  muscles,
  exercises, 
  category, 
  onSelect,
  onDelete, 
  onSelectEdit,
  editMode,
  onEdit,
  exercise,
  exercise: {
    id, 
    title = 'Welcome!', 
    description = 'Please select an exercise from the list.'
  }
}) => 
  <Grid container className={classes.container} spacing={8} >
    <Grid item className={classes.item} xs={12} sm={6}>
      <Paper className={classes.paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group
            ? <Fragment key={group}>
                <Typography 
                  variant="headline"
                  color="secondary"
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
                            onClick={() => onSelectEdit(id)}
                            color="secondary"
                          >
                            <Edit />
                          </IconButton>
                          <IconButton
                            onClick={() => onDelete(id)}
                            color="primary"
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
    <Grid item className={classes.item} xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography
          variant="display1"
          color="secondary"
          gutterBottom
        >
          { title }
        </Typography>
        {editMode
          ? <Form
              key={id}
              exercise={exercise}
              muscles={muscles}
              onSubmit={onEdit}
            />
          : <Typography
              variant="subheading"
            >
              { description }
            </Typography>
        }
      </Paper>
    </Grid>
  </Grid>
)
