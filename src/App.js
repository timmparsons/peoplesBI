import React from 'react';
import './App.css';
import ApiCallContainer from './components/ApiCallContainer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      data : [ 
        {
          name: "Dave",
          location: "Arizona"
        },
        {
          name: "John",
          location: "California"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>PeoplesBi</h1>
        <ApiCallContainer data={this.state.data}/>
      </div>
    );
  }
}

export default App;
