import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class Xkcd extends React.Component {
    state = { data: {} };


  
  // We need a constructor
  // inside of the constructor needs to be an inital state (state = object)
  // put the fetch into componentDidMount()
  componentDidMount() {
  const url = "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json";
  fetch(url)
    .then(response => {
    if (response.status >= 400) {
       throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(data => {
     console.log(this);
     console.log(this.state)
     this.setState({data:data})
  });
  }
    
  
  render() {
    const { classes } = this.props; 
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={this.state.data.img}
          title={this.state.data.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.state.data.title}
          </Typography>
          <Typography component="p">
            {this.state.data.day}.
            {this.state.data.month}.
            {this.state.data.year}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

}

Xkcd.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Xkcd);