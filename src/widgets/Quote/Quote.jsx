import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Badge from 'material-ui/Badge';
import QuoteOfTheDay from './QuoteOfTheDay';

import Typography from 'material-ui/Typography';

//import './Card.css';
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
  headline: {
      margin: 15 ,
  },
  
};

/* class Quote extends React.Component {
  constructor(props){
    super(props);
    console.log("heey")
    this.state = {
      quotes : []
    }
    console.log(this.state)
    this.getQuoteOfTheDay = this.getQuoteOfTheDay.bind(this)
  }
  

getQuoteOfTheDay() {  // Lifecyle method, fetch + API call
  fetch("https://cors-anywhere.herokuapp.com/http://quotes.rest/qod.json")
 
  .then(response => {
    return response.json();
  })
  .then((data) => {
    
    this.setState({ quotes: data })
    console.log(this.state.quotes.contents.quotes)
    
  })

}
componentWillMount() {
this.getQuoteOfTheDay();
}
render() {
  console.log(this)
  if(this.state.quotes.length > 0) {
    let quoteOfTheDay = this.state.quotes.map(((quote , i)=> {
      return(
        <div key={i}>
            <p>{quote.quote}</p>
            <p>{quote.author}</p>
        </div>
      )
    }))
    } else {
    let quoteOfTheDay = null
    }
      return (
        <div>
           <Typography variant="headline" component="h2">
                  quote:  {this.state.quotes.quote}
                 
            </Typography>
          </div>
      )
}

}
 */

 
function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <Typography align="center" color="primary" variant="headline" component="h1" className={classes.headline}>
            My fancy widget
        </Typography>
        <CardContent>
          <Typography id="cardtitle" className={classes.title} color="textSecondary">
            Quote of the Day
          </Typography>
          <Typography variant="headline" component="h2">
           </Typography>
          <Typography className={classes.pos} color="textSecondary">

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
            <Badge className={classes.margin}>
                <i className="material-icons">favorite_border</i>
            </Badge>
        </CardActions>
      </Card>
    </div>
  );
}




 SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};  





export default withStyles(styles)(SimpleCard); 