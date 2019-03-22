import React, { Component, Fragment } from 'react'
import { 
  Dialog,
  Button
} from '@material-ui/core';
import { 
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';

export default class extends Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state

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

          </form>
        </DialogContent>
        <DialogActions>
          <Button 
            color="primary"
            variant="raised"
            >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  }
}
  