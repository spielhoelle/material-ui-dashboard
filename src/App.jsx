import React from 'react';
/* Here come the Material-UI components */
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

/* This is the example Card component */
import Card from './widgets/Card/Card.jsx';
import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class App extends React.Component {


  render() {
    return (
      <div className={styles.root}>
      <Grid container spacing={24}>
        {/* This is one Widget grid item */}
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper className={styles.paper}>
            <Card/>
          </Paper>
        </Grid>
      </Grid>
    </div>

    );
  }
}

export default withStyles(styles)(App);
