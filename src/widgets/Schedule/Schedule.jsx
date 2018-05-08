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
        <iframe src="https://calendar.google.com/calendar/htmlembed?src=%23contacts%40group.v.calendar.google.com&ctz=Europe%2FBerlin" width="300" height="300" frameborder="0" scrolling="no"></iframe>
      </div>
    );
  }
}


export default (Schedule);
