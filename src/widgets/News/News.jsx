import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import './News.css';

class News extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
        };
  }

  componentDidMount() {
    var url = 'https://newsapi.org/v2/top-headlines?' +
              'sources=the-new-york-times&' +
              'apiKey=bca6e296c5be4be68520b86caa18e8a2';
    var req = new Request(url);
    fetch(req)
    .then(resp => resp.json())
    .then((result) => {
          this.setState({
            isLoaded: true,
            items: result.articles
          });
          // console.log(result.articles)
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
          return <h3 className="loading">Loading News Item...</h3>;
        } else {
          return (
              <ul className="overflow-scroll">
                <Typography id="cardtitle" color="textSecondary">
                  Latest Headlines from The New York Times
                </Typography>
                {items.map(i => (
                  <li key={i.publishedAt}>
                    <Typography variant="headline" component="h2">
                      {i.title}
                    </Typography>
                    <CardActions>
                      <Button size="small" type="submit" href={i.url} target="_blank">Read More</Button>
                    </CardActions>
                    <hr/>

                  </li>
                ))}

              </ul>
          );
    }
}
}


export default (News);
