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
        })
        }


        
        render(){
            return(
                <div>
                     <GridList cellHeight={280} >
                            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                                <Subheader component="div" align="center" color="primary">TRELLO</Subheader>
                            </GridListTile>
                    </GridList>        
                    <Card >
                           <ul className="overflow-scroll">
                 {this.state.data.map((item, index) => (
                        <li  key={item} >
                              <li align="center">{item.name}</li>
                              <Divider />
                        {item.cards.map( key => 
                                <li key={key} >
                                    <ol>{key.name}</ol>
                                    <Button href="https://trello.com/b/HLZDzvHM/github-crawler/" target="_blank" size="small" type="submit"  color="secondary">Go To Ticket</Button>
                            </li>   
                        )}                 
                    </li>   
                ))}   
                
                    <Button color="secondary" size="small" type="submit" href="https://trello.com/b/HLZDzvHM/github-crawler" target="_blank">Go To Board</Button>       </ul>               
                    </Card>
                    
                </div>

            )
        }


}


export default Trello;
                       