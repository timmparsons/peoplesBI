import React from 'react';
import Loan from './Loan'

export default class LoanContainer extends React.Component {
  state = {
    loan: []
  }

  componentDidMount() {
    const body = JSON.stringify({
      "filter": {
        "canonicalName": "Loan.LastModified",
        "value": "11/01/2019",
        "matchType": "greaterThanOrEquals",
        "precision": "day"
    },
      "fields": [
        "Loan.LoanFolder",
        "Loan.LoanNumber",
        "Loan.LoanRate",
        "Loan.LoanAmount",
        "Fields.4002",
        "Loan.LastModified",
        "Loan.BorrowerName"
      ],
      "sortOrder": [{
        "canonicalName": "Loan.LoanNumber",
        "order": "asc"
      }, 
      {
        "canonicalName": "Fields.4000",
        "order": "desc"
      }]
    })
    fetch("https://api.elliemae.com/encompass/v1/loanPipeline?limit=4", {
      method: 'POST',
      headers: {
        "Authorization": "Bearer yd9fxl8aDNGtuyYU723w6wXQZNA4",
        "Content-Type": "application/json"
      },
      body: body
    })
    .then(res => res.json())
    .then(data => {
      this.setState({loan: data})
      console.log(data)
    })
  } 

  render() {
    return (
      this.state.loan.length > 0 && (
        <div className="loan-container">
          <Loan data={this.state.loan}/>
          {/* {this.state.loan.map(loan => <p>{loan.loanGuid}</p>)} */}
        </div>
      )
    )
  }
}