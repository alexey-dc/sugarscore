import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({publicKey: ''});
    this.handlePublicKeyChange = this.handlePublicKeyChange.bind(this);
  }
  handlePublicKeyChange(e) {
    e.preventDefault();
    this.setState({publicKey:e.target.value});
  }
  render() {
    return (
      <div>
        <input type="text" name="publicKey" onChange={this.handlePublicKeyChange} value={this.state.publicKey} placeholder="Enter your public key"/>
        
        <Link to="/borrow">Borrow</Link>
      </div>
    );
  }
};

export default Splash;