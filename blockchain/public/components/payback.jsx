import React from 'react';
import PaybackListItem from './payback_list_item';
class Payback extends React.Component {
  constructor(props) {
    super(props);
    this.loans = this.props.loans;

  }
  componentWillMount() {
  }
  componentWillReceiveProps(nextProps) {
    // nextProps.loans
    // debugger
    console.log(nextProps.loans)
  }
  render() {
    let loanList = this.props.loans.map((loan) => {
      return (
        <PaybackListItem loan={loan} payback={this.props.payback} />
      );
    });
    return (
      <div>
      <h1>You have {} ETH</h1>
      <ul>
        {loanList}
      </ul>
    </div>
    );
  }
}

export default Payback;