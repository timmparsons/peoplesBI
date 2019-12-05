import React from 'react';
import './App.css';
import ApiInput from './components/ApiInput';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="heading">
          <h1>PeoplesBi</h1>
        </div>
        <div className="input-container">
          <ApiInput />
        </div>
      </div>
    );
  }
}

export default App;
