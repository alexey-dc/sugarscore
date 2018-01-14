import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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
      <div className="main-container">
        <h1>Lorem ipsum slogan lorem ipsum</h1>
        <ul>
          <li>Feature one</li>
          <li>Feature two</li>
          <li>Feature three</li>
        </ul>
        <form className="public-key">
          <TextField 
            hintText="Enter your public key"
            onChange={this.handlePublicKeyChange} 
            value={this.state.publicKey} 
            name="publicKey" 
            type="text" 
          />
          <RaisedButton onClick={this.handleSubmit} label="Get Started"/>
        </form>
      </div>
    );
  }
}

export default Splash;