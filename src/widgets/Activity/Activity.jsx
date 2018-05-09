import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
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
    const usersLimited = this.state.userdata.slice(0, 10)

    return (
      <div className="root">
        <List >
              {usersLimited.length && usersLimited.map((value, i) => (
                <ListItem  key={i} dense button divider>
                  <Avatar alt="Remy Sharp" src={value.avatar_url} />
                  <ListItemText primary={`Name: ${value.login}`} secondary={`url: ${value.repos_url}`} />
                  <ListItemSecondaryAction>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
        </List>
      </div>

    );
  }

}
export default Activity;
