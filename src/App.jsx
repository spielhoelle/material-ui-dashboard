import React from 'react';
/* Here come the Material-UI components */
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';


/* This is the example Card component */
import Card from './widgets/Card/Card.jsx';
import Quote from './widgets/Quote/Quote.jsx';

import News from './widgets/News/News.jsx';
import Weather from './widgets/Weather/Weather.jsx';
import Decider from './widgets/Decider/Decider';

import Activity from './widgets/Activity/Activity.jsx';
import Xkcd from './widgets/xkcd/Xkcd.jsx';
import './App.css';
import ClockWidget from './widgets/Clock/ClockWidget.jsx';




const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    overflowY: 'scroll',
    overflowX: 'visible',
  },
});

class App extends React.Component {
constructor(props){
    super(props);
}

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
            <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper className={styles.paper}>
            <Activity />
          </Paper>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper className={styles.paper}>
            <Quote  />
           
            <News/>
          </Paper>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper className={styles.paper}>
            <Weather/>


          </Paper>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper className={styles.paper}>
            <Xkcd/>
          </Paper>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper className={styles.paper}>
            <Decider/>
          </Paper>
        </Grid>
      </Grid>
      <ClockWidget />
    </div>
    );
  }
}

export default withStyles(styles)(App);
