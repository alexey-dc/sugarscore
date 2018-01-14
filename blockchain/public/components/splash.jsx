import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({publicKey: ''});
    this.handlePublicKeyChange = this.handlePublicKeyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlePublicKeyChange(e) {
    e.preventDefault();
    this.setState({publicKey:e.target.value});
  }
  handleSubmit(e) {
    // e.preventDefault();
    this.props.login(this.state.publicKey);
    this.props.history.push(`/borrow`);
  }
  render() {
    return (
      <form className="public-key">
        <input 
          type="text" 
          name="publicKey" 
          onChange={this.handlePublicKeyChange} 
          value={this.state.publicKey} 
          placeholder="Enter your public key"
        />
        
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default Splash;