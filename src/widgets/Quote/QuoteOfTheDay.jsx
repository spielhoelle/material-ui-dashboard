import React from 'react';
import Typography from 'material-ui/Typography';
/* const quotes = [
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
   */
  
class QuoteOfTheDay extends React.Component {
    constructor(props){
      super(props);
      console.log("heey")
      this.state = {
        quotes : []
      }

    }


 getQuoteOfTheDay() {  // Lifecyle method, fetch + API call
    fetch("https://cors-anywhere.herokuapp.com/http://quotes.rest/qod.json")
   
    .then(response => {
      return response.json();
    })
    .then((data) => {
      
      this.setState({ quotes: data })
      console.log(this.state.quotes.contents.quotes)
      console.log(this.state.quotes[0])
      
    })
  
}
componentDidMount() {
  this.getQuoteOfTheDay();
}
  
render() {
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

export default QuoteOfTheDay;
  