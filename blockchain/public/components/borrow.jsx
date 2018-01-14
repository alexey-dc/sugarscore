import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

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
    return (
      <div className="borrow-container">
        <form className="borrow-form-container">
          <h1>Borrow Money</h1>
          <h2>Public key [{this.props.user}]'s credit score is {this.props.creditScore}</h2>
          <input 
            type="number" 
            name="borrowAmount" 
            onChange={this.handleBorrowAmountChange} 
            value={this.state.borrowAmount} 
            placeholder="ETH"
          />
          <RaisedButton onClick={this.handleSubmit} primary={true} label="Borrow"/>
        </form>
        
      </div>
    );
  }
}


export default Borrow;