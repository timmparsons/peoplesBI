import React from 'react';
import './App.css';
import ApiCallContainer from './components/ApiCallContainer'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>PeoplesBi</h1>
        <ApiCallContainer />
      </div>
    );
  }
}

export default App;
