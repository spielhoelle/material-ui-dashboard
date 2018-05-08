import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import './Schedule.css';

class Schedule extends React.Component {
  constructor(props){
    super(props)

  }



  render() {

    return (
      <div className="schedule-box">
        Schedule
      </div>
    );
  }
}


export default (Schedule);
