import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';


class Friday extends React.Component {
	checkingDays(){
		let weekDays =['Sunday', 'Monday', 'Tusday', 'Wednsday', 'Tursday',' Friday', 'Saturday']
		let time = new Date();
		let day =time.getDay() ;
		return weekDays[day]
	}

	render(){
		const { classes } = this.props;
		return(
			<div>
				<Card >
			        <CardContent>
			         <Typography   component="h1" >
			           Day of the Week
			         </Typography>
			         <Typography variant="headline" >
			          <Divider/>
			         </Typography>
			         <Typography component="p">
			         	Today is:{this.checkingDays()} 
			         </Typography>
			        </CardContent>
      			</Card>
			</div>
		);
	}
}
;

export default Friday; 
