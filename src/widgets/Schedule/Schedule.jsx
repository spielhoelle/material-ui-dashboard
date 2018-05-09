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

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

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
    }


  render() {

    return (
      <div className="schedule-box">
        <BigCalendar
          style={{height: '420px'}}
          {...this.props}
          events={this.state.events}
        />
      </div>
    );
  }
}


export default (Schedule);
