import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Badge from 'material-ui/Badge';

import Typography from 'material-ui/Typography';

//import './Card.css';
const styles = {
  card: {
    minWidth: 275,
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
  headline: {
      margin: 20 ,
  }
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <Typography  variant="headline" component="h1" className={classes.headline}>
            My fancy widget
        </Typography>
        <CardContent>
          <Typography id="cardtitle" className={classes.title} color="textSecondary">
            Quote of the Day
          </Typography>
          <Typography variant="headline" component="h2">
          "New technology is not good or evil in and of itself. It's all about how people choose to use it."

          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            David Wong
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
            <Badge className={classes.margin}>
                <i className="material-icons">favorite_border</i>
            </Badge>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};





export default withStyles(styles)(SimpleCard);