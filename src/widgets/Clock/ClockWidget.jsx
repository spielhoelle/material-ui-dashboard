import React, {Component} from "react";
import Clock from 'react-clock';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

import './ClockWidget.css';

class ClockWidget extends Component {
    state = {
        date: new Date(),
      }

      componentDidMount(){
          setInterval(
              () => this.setState({date: new Date()}),
              1000
          );
      }

      render(){
          return(
              <Grid item  container  spacing={0}>
              <div className="theClock">
                  <h3>my fancy widget</h3>
                  <Clock value={this.state.date} />
                  
                  <TextField className="analogClock" defaultValue={this.state.date}/>
              </div>
              </Grid>
          );
      }
}

export default ClockWidget;