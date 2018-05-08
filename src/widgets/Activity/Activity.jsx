<<<<<<< HEAD
import React from 'react'; 
import PropTypes from 'prop-types'; 
import FetchItem from './FetchItem'; 
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'; 
import Checkbox from 'material-ui/Checkbox'; 

class Activity extends React.Component { 
constructor(props){ 
  super(props); 
   this.state={ 
         userdata:"", 
         username:"", 
          checked: [1], 
        } 
} 
 getRepositories = (e) => { 
   fetch(`https://api.github.com/users`) 
      .then(response => { 
        console.log(response) 
        return response.json() 
  }) 
       .then(data => { 
        console.log(data); 
        this.setState({userdata:data}) 
        console.log(this.state.userdata) 
         
  }) 
       .catch(err =>{ 
        console.error('Fetch error', err) 
  }); 
} 
componentDidMount (){ 
    this.getRepositories(); 
  } 
handleToggle = value => () => { 
    const { checked } = this.state; 
    const currentIndex = checked.indexOf(value); 
    const newChecked = [...checked]; 
    if (currentIndex === -1) { 
      newChecked.push(value); 
    } else { 
      newChecked.splice(currentIndex, 1); 
    } 
    this.setState({ 
      checked: newChecked, 
    }); 
  } 
render() { 
  let githubUser; 
        if(this.state.userdata){ 
          githubUser = this.state.userdata.map((item,i) => { 
          return ( 
            <FetchItem key={i} item={item} /> 
          ); 
        }); 
      } 

return ( 
    <div> 
    <List> 
          {[0, 1, 2, 3].map(value => ( 
            <ListItem key={value} dense button > 
              <Avatar alt="Remy Sharp" src="/static/images/remy.jpg" /> 
              <ListItemText primary={`Line item ${value + 1}`} /> 
              <ListItemSecondaryAction> 
                <Checkbox 
                  onChange={this.handleToggle(value)} 
                  checked={this.state.checked.indexOf(value) !== -1} 
                /> 
              </ListItemSecondaryAction> 
            </ListItem> 
          ))} 
        </List> 
      <div className="userdata"> 
        <h3>Todo List</h3> 
         {githubUser} 
      </div> 
    </div>
   ); 
} 
export default Activity; 
  
=======
import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import './Activity.css';


class Activity extends React.Component {
constructor(props){
  super(props);
   this.state={
         userdata:"",
         username:"",
          checked: [1],
        }
}
 getRepositories = (e) => {
   fetch(`https://api.github.com/users`)
      .then(response => {
        console.log(response)
        return response.json()
  })
       .then(data => {
        console.log(data);
        this.setState({userdata:data})
        console.log(this.state.userdata)
        
  })
       .catch(err =>{
        console.error('Fetch error', err)
  });
}
componentDidMount (){
    this.getRepositories();
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  }
render() {
  return (
    <div>
      <List>
            {this.state.userdata && this.state.userdata.map((value, i) => (
              <ListItem key={i} dense button >
                <Avatar alt="Remy Sharp" src={value.avatar_url} />
                <ListItemText primary={`Name: ${value.login}`} />
                <ListItemText primary={`url: ${value.repos_url}`} />
                <ListItemSecondaryAction>
                  <Checkbox
                    onChange={this.handleToggle(value)}
                    // checked={this.state.checked.indexOf(value) !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
      </List>
    </div>

  );
}

}
export default Activity;
>>>>>>> master
