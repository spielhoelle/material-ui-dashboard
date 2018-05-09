import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';





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
        const url = 'https://api.trello.com/1/members/me/boards?key=6a85c1e91438b1211d439f31bf877462&token=392c37bd8bea6045316ed8506f4fc50c5db53b134b797d10ce253597687ac6d3';
        console.log(url)
        const req = new Request(url);
        fetch(req)
        .then(resp => resp.json())
        .then((result) => {
            this.setState({
                data: result[0].name
            });
            console.log(result[0].name)
        })
        }



        render(){
            return(
                <div>
                    <GridList cellHeight={280} >
                            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                                <Subheader component="div">Trello grid</Subheader>
                            </GridListTile>
                    </GridList>        
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">
                                TRELLO
                            </Typography>
                            <Typography variant="headline" component="h2">
                               hellooo
                            </Typography>
                            <Typography color="textSecondary">
                                adjective
                            </Typography>
                            <Typography component="p">
                               
                            </Typography>
                        </CardContent>
                    </Card>

                </div>

            )
        }





}


export default Trello;