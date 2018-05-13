import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';

import Button from 'material-ui/Button';
import Badge from 'material-ui/Badge';

import Typography from 'material-ui/Typography';




class Quote extends React.Component {
  constructor(props){
    super(props);
    // console.log("heey")
    this.state = {
      quotes : []
    }

  }


  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/http://quotes.rest/qod.json")

     .then(response => {
       return response.json();
     })
     .then((data) => {

       this.setState({ quotes: data.contents.quotes })


     })
     }
  render() {

return (
        <div>
          <Card align="center">
          <Typography id="cardtitle"  color="textSecondary">
            Quote of the Day
          </Typography>
          <Typography variant="headline" >
          {this.state.quotes.map((item , i) => (
                    item.quote
                 )
            )}
          </Typography>
           <Typography color="textSecondary" component="h2">
          {this.state.quotes.map((item , i) => (
                    item.author
                 )
            )}

            </Typography>
            <Button size="small">Discover More</Button>
            <Badge >
                <i className="material-icons">favorite_border</i>
            </Badge>
            </Card>
          </div>

      )

}


}





export default Quote;
