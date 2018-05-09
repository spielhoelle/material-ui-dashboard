import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
import { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import './Schedule.css';
import { getEvents } from './gcal';
import moment from 'moment';

import BigCalendar from 'react-big-calendar';
BigCalendar.momentLocalizer(moment);


// require('style!css!react-big-calendar/lib/css/react-big-calendar.css');


class Schedule extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount () {
      getEvents((events) => {
        this.setState({events})
      })
      console.log("Events Object: ", this.state.events)
    }

  render() {

    return (
      <div className="schedule-box">
        <BigCalendar
          style={{height: '420px'}}
          events={this.state.events}
        />
      </div>
    );
  }
}


export default (Schedule);
