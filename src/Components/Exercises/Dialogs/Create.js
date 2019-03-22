import React, { Component, Fragment } from 'react'
import { 
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Dialog,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  withStyles
} from '@material-ui/core';

const styles = theme => ({
  FormControl: {
    width: 400
  }
})

export default withStyles(styles) (class extends Component {
  state = {
    open: false,
    exercise: {
      title: '',
      description: '',
      muscles: ''
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => ({ target: { value }}) => {
    this.setState({ 
      exercise: {
        ...this.state.exercise,
        [name]: value 
      }
    });
  };

  handleSubmit = () => {
    // TODO: validate
    const { exercise } = this.state

    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
    })

    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    })
  }

  render() {
    const { 
      open, 
      exercise: { 
        title, 
        description, 
        muscles 
      }
    } = this.state,
    { 
      classes, 
      muscles: categories 
    } = this.props

    return <Fragment>
      <Button 
        variant="outlined" 
        color='inherit'
        onClick={this.handleToggle}
        >
        {
          !this.state.open && 'Add'
        }
        {
          this.state.open && 'Close'
        }
      </Button>
      <Dialog
        open={open}
        onClose={this.handleToggle}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Create a new exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below
          </DialogContentText>
          <form>
            <TextField
              label="Title"
              value={title}
              onChange={this.handleChange('title')}
              margin="normal"
              className={classes.FormControl}
            />
            <br/>
            <FormControl
              className={classes.FormControl}
            >
              <InputLabel htmlFor="muscles">
                Muscles
              </InputLabel>
                <Select
                  value={muscles}
                  onChange={this.handleChange('muscles')}
                >
                  {categories.map(category => 
                    <MenuItem 
                      value={category}
                      key={category}
                    >
                      {category}
                    </MenuItem>
                  )}
                </Select>
            </FormControl>
            <br/>
            <TextField
              multiline
              rows="4"
              label="Description"
              value={description}
              onChange={this.handleChange('description')}
              margin="normal"
              className={classes.FormControl}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button 
            color="primary"
            variant="contained"
            onClick={this.handleSubmit}
            >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  }
})
  