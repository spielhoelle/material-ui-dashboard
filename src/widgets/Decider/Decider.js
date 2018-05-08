import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

import "./Card.css";
const styles = {
  card: {
    minWidth: 275
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function Decider(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            id="cardtitle"
            className={classes.title}
            color="textSecondary"
          >
            Decider Widget
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Decide!</Button>
        </CardActions>
      </Card>
    </div>
  );
}

Decider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Decider);
