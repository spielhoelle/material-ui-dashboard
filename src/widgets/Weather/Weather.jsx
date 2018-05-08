import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import './Weather.css';

class Weather extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
        };
  }

  componentDidMount() {
    var url = 'http://api.openweathermap.org/data/2.5/forecast?q=berlin&units=metric&appid=e269b0432cb35577201f06837e2a5803';
    var req = new Request(url);
    fetch(req)
    .then(resp => resp.json())
    .then((result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          // console.log(result)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }


  render() {
    const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <h3 className="loading">Loading Berlin Weather ...</h3>;
        } else {
          return (
            <div className="weather-box">
              <Typography id="cardtitle" color="textSecondary">
                Berlin Weather
              </Typography>
              <Typography variant="headline" component="h2">
                <img src={`http://openweathermap.org/img/w/${this.state.items.list[0].weather[0].icon}.png`} />
                <br/>
                <span className="weather-description">{this.state.items.list[0].weather[0].description}</span> | {this.state.items.list[0].main.temp}°C
                <br/>
                <p className="etc">
                  <i className="material-icons">toys</i>
                  {this.state.items.list[0].wind.speed}Km/h
                  <br/>
                  <i className="material-icons">spa</i>
                  {this.state.items.list[0].main.humidity}%
                  <br/>
                  <br/>
                </p>
              </Typography>
            </div>
          );
    }
}
}


export default (Weather);
