import React from 'react';
import { Redirect } from 'react-router-dom';

class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	errorPassword: 'Password should be at minimum 8 characters',
    	required: 'This field is required',
    	reqPass: 'This field is required',
    	redirect: false
    };
    this.isRequired = this.isRequired.bind(this);
    this.validationPassword = this.validationPassword.bind(this);
    this.handleSign = this.handleSign.bind(this);
  }

  isRequired(field, node) {
  	if (node.target.value.length > 0) {
      this.setState({required: ''});
  	} else {
  	  this.setState({required: 'This field is required'});
  	}
  }

  validationPassword() {
    const password = document.getElementById('password').value;
    password.length?this.setState({reqPass: ''}):this.setState({reqPass: 'This field is required'});
    if (password.length >= 8) {
    	return this.setState({errorPassword: ''});
    } else {
    	return this.setState({errorPassword: 'Password should be at minimum 8 characters'});
    }
  }

  handleSign(e) {
  	e.preventDefault();
  	if (!this.state.errorPassword && !this.state.required && !this.state.reqPass) {
  	  this.setState({redirect: true});
  	}
  }

  render() {
   if (this.state.redirect) {
       return <Redirect to='/'/>
   } else {
	     return (
	      <div>
	       <form>
	         <div>
	           <h1>Welcome</h1>
	           <div>
	           <label>Username</label>
	           <input required onChange={this.isRequired.bind(this, 0)} type="text"/>
	           </div>
	           <p className='error'>{this.state.required}</p>
	         </div>
	         <div>
	           <div><label>Password</label>
	           <input required id="password" onChange={this.validationPassword} type="password"/>
	           </div>
	           <p className='error'>{this.state.reqPass}</p>
	           <p className='error'>{this.state.errorPassword}</p>
	         </div>
	         <button onClick={this.handleSign}>Sign</button>
	       </form>
	      </div>
	    );
   }
  }
}

export default Sign;