import React, { Component } from 'react'
import { 
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  withStyles,
  Button,
} from '@material-ui/core';

const styles = theme => ({
  FormControl: {
    width: 250
  },
})

export default withStyles(styles) (class extends Component {

  state = this.getInitState()

  getInitState() {
    const { exercise } = this.props

    return exercise ? exercise : {
      title: '',
      description: '',
      muscles: ''
    }
  }

  static getDerivedStateFromProps({ exercise }) {
    return exercise ||  null
  }

  handleChange = name => ({ target: { value }}) =>
    this.setState({ 
      [name]: value 
    })

  handleSubmit = () => {
    // TODO: validate

    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
      ...this.state
    })

    this.setState(
      this.getInitState()
    )
  }

  render() {
    const { 
      classes, 
      exercise,
      muscles: categories,

    } = this.props,
    {
      title,
      description,
      muscles
    } = this.state


    return  <form>
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
    <br/>
    <Button 
      color="primary"
      variant="contained"
      onClick={this.handleSubmit}
      >
      {exercise ? 'Update' : 'Create'}
    </Button>
  </form>
  }
})