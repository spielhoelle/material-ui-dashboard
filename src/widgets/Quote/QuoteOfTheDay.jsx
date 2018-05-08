import React from 'react';
import Typography from 'material-ui/Typography';
import Quote from './Quote';
const quotes = [
    {
    "quote": "You make a living by what you earn; you make a life by what you give.",
    "author": "Winston  Churchill",
    "length": "69",
    "tags": [
    "giving",
    "inspire"
    ],
    "category": "inspire",
    "title": "Inspiring Quote of the day",
    "date": "2018-05-08",
    "id": null
    }
  ] 
  
  
class QuoteOfTheDay extends React.Component {
    constructor(){
      super();
      this.state = {
        quotes : []
      }

    }

componentWillMount() {  // Lifecyle method, fetch + API call
    fetch("https://cors-anywhere.herokuapp.com/http://quotes.rest/qod.json/?results=200")
    .then(results => {return results.json();})
    .then((data) => {
      let quoteOfTheDay = data.results.map((quote => {
        return(
          <div key={quote.results}>

          </div>
        )
      }))
      this.setState({ quoteOfTheDay })
      console.log (this.state.quoteOfTheDay);
    })
  
}



render() {
    return(
         <Typography variant="headline" component="h2">
                quote:  {this.state.quotes}
 
          </Typography>
    )
}

}

export default QuoteOfTheDay;