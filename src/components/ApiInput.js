import React from 'react';

class ApiInput extends React.Component {

  handleInput(e) {
    e.preventDefault();

    const input = e.target.elements.input.value.trim();
    if(input) {
      alert(input)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleInput}>
          <input type="text" name="input" />
          <button>New Search</button>
        </form>
      </div>
    )
  }
}

export default ApiInput