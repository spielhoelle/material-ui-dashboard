import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import TextField from "material-ui/TextField";

const styles = theme => ({
  card: {
    minWidth: 275,
    minHeight: 275
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class Decider extends React.Component {
  state = {
    optionOne: "",
    optionTwo: "",
    decision: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  chooseOne = () => {
    const option = Math.round(Math.random());
    const decision = option ? this.state["optionOne"] : this.state["optionTwo"];
    this.setState({ decision });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          {!this.state.decision ? (
            <div>
              <CardContent>
                <Typography variant="headline" component="h2">
                  Decider Widget
                </Typography>
                <Typography component="p">
                  <br />
                  Enter two things between which to decide:
                </Typography>
                <TextField
                  id="optionOne"
                  label="Option One"
                  className={classes.textField}
                  value={this.state.optionOne}
                  onChange={this.handleChange("optionOne")}
                  margin="normal"
                />
                <TextField
                  id="optionTwo"
                  label="Option Two"
                  className={classes.textField}
                  value={this.state.optionTwo}
                  onChange={this.handleChange("optionTwo")}
                  margin="normal"
                />
              </CardContent>
              <CardActions>
                <Button variant="raised" size="small" onClick={this.chooseOne}>
                  Decide!
                </Button>
              </CardActions>
            </div>
          ) : (
            <CardContent>
              <Typography variant="headline" component="h2">
                Decider Widget
              </Typography>
              <Typography component="p">
                You should do ....
                <span style={{ color: "red" }}>{this.state.decision}</span>!
              </Typography>
            </CardContent>
          )}
        </Card>
      </div>
    );
  }
}

Decider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Decider);
