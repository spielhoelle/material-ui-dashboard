import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import NotesList from './NotesList.jsx';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});




class  Notes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: " ",
      notes: JSON.parse(localStorage.getItem("notes")) || []
    }

  }
  change = e => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }


  addNote = inputValue => {

    const notes = [...this.state.notes]
    notes.push({ text: this.state.inputValue, created: Date.now(), })
    this.state.inputValue.length > 1 ?
      this.setState({ notes }) : null;

    localStorage.setItem("notes", JSON.stringify(notes))


  }

    

    render(){
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="display5" gutterBottom>
            {this.props.note.text}
           </Typography>
           
          <Typography component="p">
            
          </Typography>
          
      
        </CardContent>
      </Card>
      
      
    </div>
  );

    }
  }


Notes.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default Notes;