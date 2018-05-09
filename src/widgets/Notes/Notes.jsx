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
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

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
 

    render(){
  return (


      <Card>
        <CardContent>
          <List >
              <ListItem>
                <Typography variant="display5" gutterBottom>
                  {this.props.note.text}
                </Typography>
                <ListItemSecondaryAction>
              <IconButton color="secondary" aria-label="Delete"
               onClick={() => this.props.deleteNote(this.props.index)} >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
           </List>
        </CardContent>
      </Card>
      
      
    
  );

    }
  }


Notes.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default Notes;