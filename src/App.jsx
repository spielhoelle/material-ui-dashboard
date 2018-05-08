import React from 'react';
/* Here come the Material-UI components */
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

/* This is the example Card component */
import Card from './widgets/Card/Card.jsx';
<<<<<<< master

import News from './widgets/News/News.jsx';
import Weather from './widgets/Weather/Weather.jsx';

=======
import Quote from './widgets/Quote/Quote.jsx';
import QuoteOfTheDay from './widgets/Quote/QuoteOfTheDay.jsx';
import './App.css';

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
            <Quote  />
            <QuoteOfTheDay getQuoteOfTheDay={this.getQuoteOfTheDay} /> 
<<<<<<< master
            <News/>
          </Paper>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper className={styles.paper}>
            <Weather/>
=======
            <Quote/>
>>>>>>> created Quote widget/component
          </Paper>
        </Grid>
      </Grid>
    </div>

    );
  }
}

export default withStyles(styles)(App);
