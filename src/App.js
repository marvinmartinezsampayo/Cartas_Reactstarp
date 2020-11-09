import React from 'react';
import UserCard from  './component/UserCard';

const user = require('./utils/people.json');


class App extends React.Component {

  constructor(){
    super();

    this.state={
      activeUser:user[0],
      activeUserIndex:0,
     }
  }

  render()
  {
    console.log(this.state.activeUser)
      return (

        <div className="App" style={{
          backgroundColor:'#a5a5a5',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          height:'100vh'
          }}>
          
          <UserCard color={this.state.activeUser.color}
            name={this.state.activeUser.name}
            img={this.state.activeUser.img}>
          </UserCard>
            

        </div>
      );
  }
  

componentDidMount()
{

        setInterval(()=>{
          let newIndex = this.state.activeUserIndex + 1;
          if(newIndex >= user.length){
            newIndex=0
          };

          this.setState({
              activeUser:user[newIndex],
              activeUserIndex:newIndex
            });
      },2000);    
 
}
}

export default App;
