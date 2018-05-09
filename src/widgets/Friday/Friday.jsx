import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Badge from 'material-ui/Badge';
import './Friday.css';

class Friday extends React.Component {
	checkingDays(){
		let weekDays =['Sunday', 'Monday', 'Tusday', 'Wednsday', 'Tursday',' Friday', 'Saturday']
		let time = new Date();
		let day =time.getDay();
		if( weekDays[5] === weekDays[day] ){
			return 'heyy today is weekend'
		} else{
			return weekDays[day]
		}
		
	}

	render(){
		return(
			<div>
				<Card >
			        <CardContent>
			         <Typography   component="h1">
			           <h1>Day of the Week</h1>
			         </Typography>
			         <Typography   component="h1">
			           <h2>Is it Friday?<Badge ><i className="material-icons icon">event_note</i></Badge></h2>
			            
			         </Typography>
			         <Typography variant="headline" >
			          <Divider/>
			         </Typography>
			         <Typography component="p">
			         	<h2>Today is:{this.checkingDays()}</h2>
			         </Typography>
			        </CardContent>
      			</Card>
			</div>
		);
	}
}
;

export default Friday; 
