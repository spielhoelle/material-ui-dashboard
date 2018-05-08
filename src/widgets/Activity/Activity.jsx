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
