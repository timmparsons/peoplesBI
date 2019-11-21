import React from 'react';

export default class ApiCallContainer extends React.Component {
  state = {
    loan: []
  }

  componentDidMount() {
    fetch("https://api.elliemae.com/encompass/v1/loans/6ce8f8e4-31c7-417c-9fc6-669d54884c2d", {
      headers: {
        "Authorization": "Bearer J0t8Pu8k4ncQVfO089C6psC8EzD3",
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({loan: data})
      console.log(data)
    })
  } 

  render() {
    return (
      <div>
        <p>{this.state.loan.encompassId}</p>
        <p>${this.state.loan.baseLoanAmount}</p>

      </div>
    )
  }
}