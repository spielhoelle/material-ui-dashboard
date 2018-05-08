import React, { Component } from 'react';

class FetchItem extends Component {
	render(){
		return(
			 <li className="Todo">
		        <strong>Name:{this.props.item.login}</strong><br/>
		        <strong>Name:{this.props.item.repos_url}</strong><br/>
		        <img src={this.props.item.avatar_url} />
		       
		     </li>
		);
	}
}
export default FetchItem;