import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';





class Trello extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          data: [],
          name : "",
          desc: ""
         
        };
      }
    componentDidMount() {  
        const url = 'https://api.trello.com/1/boards/HLZDzvHM/lists?cards=open&card_fields=name&filter=open&fields=name&key=6a85c1e91438b1211d439f31bf877462&token=392c37bd8bea6045316ed8506f4fc50c5db53b134b797d10ce253597687ac6d3';   
        console.log(url)
        const req = new Request(url);
        fetch(req)
        .then(resp => resp.json())
        .then((result) => {
            this.setState({
                data: result
            });
            console.log(result)
            console.log(result[0].name)
            
        })
        }



        render(){

            return(
                <div>
                     <GridList cellHeight={280} >
                            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                                <Subheader component="div" align="center">TRELLO</Subheader>
                            </GridListTile>
                    </GridList>        
                    <Card>
                            <Typography variant="headline" component="h2">
                            </Typography>
                 {this.state.data.map(i => (
                        <li key={i} >
                              <li align="center">    {i.name} </li>
                              {this.state.data.map( j => (
                    <li key={j} >
                              <ol> {j.cards[0].name}</ol>
                              <Divider />
                              <hr/>

                      {/* <Typography color="textSecondary">
                            </Typography> 
                            <Button size="small" type="submit" href={j.url} target="_blank">Go To The Ticket</Button>    */}               
                    </li>   
                ))}                 
                    </li>   
                ))}  
                
                            
                    </Card>
                </div>

            )
        }





}


export default Trello;