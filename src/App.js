import React from 'react';
import './App.css';
import LoanContainer from './components/LoanContainer';
import ApiInput from './components/ApiInput'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>PeoplesBi</h1>
        <ApiInput />
        <LoanContainer />
      </div>
    );
  }
}

export default App;
