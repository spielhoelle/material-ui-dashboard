import React from 'react';
import Notes from './Notes';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { createMuiTheme } from 'material-ui/styles';

const styles = theme => ({
  card: {
    minWidth: 300,
    margin: '100px 300px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
    color: theme.palette.primary.light
  },
});
class NotesList extends React.Component{
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

 handleButton = () =>{
   const notes = [...this.state.notes]
   this.addNote(this.state.inputValue);
   this.setState({
     inputValue: ''
   })
   localStorage.setItem("notes", JSON.stringify(notes))
   
 }
  addNote = inputValue => {

    const notes = [...this.state.notes]
    notes.push({ text: this.state.inputValue, created: Date.now(), })
    this.state.inputValue.length > 1 ?
      this.setState({ notes }) : null;

    localStorage.setItem("notes", JSON.stringify(notes))


  } 
  deleteNote = (index) =>{
    console.log(index)
    const notes=[...this.state.notes];
    notes.splice(index,1)
    this.setState({notes})
    localStorage.setItem("notes",JSON.stringify(notes))
  }

     render(){
       return(
         <Card>

           <form>
            
             <TextField
               id="Note"
               name="inputValue"
               label="Note:"
               value={this.state.inputValue}
               className={this.props.classes.textField}
               onChange={e => this.change(e)}
               margin="normal"
             />
             <Button color="primary" variant="raised" className={this.props.classes.button} onClick={() => this.handleButton(this.state.inputValue)}>
               Add Note
            </Button>
           </form>
           {this.state.notes.map((note, index) => 

             <Notes note = {note}  index={index} key={index} change={this.change} handleButton={this.handleButton}  deleteNote={ this.deleteNote} />

             

           ) }
             
         </Card>
       )
       
     }



} 




export default withStyles(styles)(NotesList);