import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Display from './Display';
import Controls from './Controls';

import './Countdown.css';
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
};

class Countdown extends Component {
  constructor() {
    super();

      this.state = {
        seconds: 0,
        time: 0,
        status: null
};
  
  }

    componentWillUnmount = () => {
      clearInterval(this.interval);
  };

    onSecondsChanged = (seconds) => {
      seconds = parseInt(seconds);

      if (seconds && typeof seconds === 'number') {
        if (seconds <= 359999) {
          this.setState(() => ({ seconds: seconds, time: seconds * 1000 }));
        }
      } else {
          this.setState(() => ({ seconds: 0, time: 0 }));
      }
    }

    startTimer = () => {
      if (this.state.status !== 'started') {
        this.interval = setInterval(() => {
          if (this.state.time !== 0) {
              this.setState(prevState => ({ time: prevState.time - 10 }));
          } else {
              this.setState(() => ({ seconds: 0, status: null, time: 0 }));
              clearInterval(this.interval);
          }
            }, 10);

            this.setState(() => ({ status: 'started' }));
        }
    }

    stopTimer = () => {
      if (this.state.status && this.state.status === 'started') {

        clearInterval(this.interval);

          this.setState((prevState) => {
            return ({
              status: 'stopped',
              seconds: Math.floor(prevState.time / 1000)
          });
      });
    }
  }

    resetTimer = () => {
      clearInterval(this.interval);
      this.setState(() => ({ seconds: 0, status: null, time: 0 }));
  }      
  

  render() {
    const { classes } = this.props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Display 
            seconds={this.state.seconds}
            status={this.state.status}
            time={this.state.time}
            onSecondsChanged={this.onSecondsChanged}>
            <div>
              <Controls
                startTimer={this.startTimer}
                stopTimer={this.stopTimer}
                resetTimer={this.resetTimer}
                status={this.state.status}
                canStart={this.state.seconds > 0} />
            </div>
          </Display>
        </CardContent>
      </Card>
    </div>
  );
  }
}

Countdown.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Countdown);
