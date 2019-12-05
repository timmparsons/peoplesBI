import React from 'react';
import LineGraph from './graphs/LineGraph';
import TwoLevelPieChart from './graphs/TwoLevelPieChart';

class ApiInput extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault();
    fetch("https://investors-exchange-iex-trading.p.rapidapi.com/stock/msft/effective-spread", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com",
      "x-rapidapi-key": "08199a99f9mshe42910ad9e2eef3p176742jsn175c160de1dc"
	}
})
    .then(response => response.json())
    .then(json => {
      this.setState({
        data: json
      })
      console.log(json)
  })
}

  
  render() {
    const { data } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button>New Search</button>
        </form>
        {data.map((object, index) => 
          <div key={index}>
            <p>Venue: ${object.venue}</p>
            <p>Effective Spread: {object.effectiveSpread}</p>
            <hr />
          </div>
        )}
        <LineGraph />
        <TwoLevelPieChart />
      </div>
    )
  }
}

export default ApiInput