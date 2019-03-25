import React, { Component, Fragment } from 'react'
import { 
  DialogTitle,
  DialogContent,
  DialogContentText,
  Dialog,
  Button,
} from '@material-ui/core';
import Form from './Form'

export default class extends Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleFormSubmit = exercise => {
    this.handleToggle()
    this.props.onCreate(exercise)
  }

  render() {
    const { open } = this.state,
          { muscles } = this.props

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
      >
        <DialogTitle>
          Create a new exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below
          </DialogContentText>

        <Form
          muscles={muscles}
          onSubmit={this.handleFormSubmit}
        />
        
        </DialogContent>
      </Dialog>
    </Fragment>
  }
}
  