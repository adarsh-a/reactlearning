import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInteraction/UserInput';
import UserOutput from './UserInteraction/UserOutput';


class App extends Component {

  state=({
    users:[
      {username:"John Wick",job:"Assasin"},
      {username:"Hagrid",job:"Gatekeeper"}]
    
  });

  changeUser=(event)=>
  {
    this.setState({
      users:[
        {username:event.target.value,job:"Assasin"},
        {username:"Hagrid",job:"Gatekeeper"}]
      });
  }

  render(){
    const style=
    {
      backgroundColor:"LightGrey",
      width:"400px",
      margin:"10px auto",
      padding: "10px 10px 10px 10px",
      font:"inherit"
    }
  return (
    <div className="App" style={style}>
      <div>
      This is the first assignment
      </div>
      <UserInput change={this.changeUser} username={this.state.users[0].username}/>
      <UserOutput username={this.state.users[0].username} job={this.state.users[0].job}/>
      <UserOutput username={this.state.users[1].username} job={this.state.users[1].job}/>
    </div>
  );
}
}

export default App;
