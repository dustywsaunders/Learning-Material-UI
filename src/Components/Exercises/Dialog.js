import React, { Component, Fragment } from 'react'
import { 
  DialogTitle,
  DialogContent,
  DialogContentText,
  Dialog,
  Button,
} from '@material-ui/core';
import Form from './Form'
import { Consumer } from '../../context'

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
    const { open } = this.state

    return (
      <Consumer>
        {({ muscles }) => 
          <Fragment>
            <Button 
              variant="outlined" 
              color='secondary'
              onClick={this.handleToggle}
              >
              {
                !open && 'Add'
              }
              {
                open && 'Close'
              }
            </Button>
            <Dialog
              open={open}
              onClose={this.handleToggle}
              fullWidth
              maxWidth='xs'
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
      </Consumer>
    )
  }
}
  