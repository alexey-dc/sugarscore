import React from 'react';
import { Link } from 'react-router-dom';

class Borrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({borrowAmount: 0});
    this.handleBorrowAmountChange = this.handleBorrowAmountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleBorrowAmountChange(e) {
    e.preventDefault();
    this.setState({borrowAmount: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.newLoan(this.state.borrowAmount);
    this.props.history.push(`/payback`);
  }
  render() {
    let creditScore = 685;
    return (
      <form className="borrow-form-container">
        <h1>Your credit score is {creditScore}</h1>
        <input 
          type="number" 
          name="borrowAmount" 
          onChange={this.handleBorrowAmountChange} 
          value={this.state.borrowAmount} 
          placeholder="ETH"
        />
        
        <button onClick={this.handleSubmit}>Submit</button>

      </form>
    );
  }
}


export default Borrow;